'use client';

import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const WELCOME_NOTIFICATION_ID = 1;
const CHANNEL_ID = 'attaportfolio-general';

export function NotificationProvider() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    const setupAndShowWelcome = async () => {
      try {
        // Request permissions (required on Android 13+)
        const permStatus = await LocalNotifications.checkPermissions();
        if (permStatus.display === 'prompt' || permStatus.display === 'denied') {
          const result = await LocalNotifications.requestPermissions();
          if (result.display !== 'granted') return;
        }

        // Create channel for Android 8+
        await LocalNotifications.createChannel({
          id: CHANNEL_ID,
          name: 'General',
          importance: 4,
          visibility: 1,
        });

        // Cancel any previous welcome notification to avoid duplicates
        await LocalNotifications.cancel({ notifications: [{ id: WELCOME_NOTIFICATION_ID }] });

        // Schedule welcome notification (shows ~2 seconds after app open)
        await LocalNotifications.schedule({
          notifications: [
            {
              id: WELCOME_NOTIFICATION_ID,
              title: 'Welcome to App',
              body: 'Welcome to Atta Portfolio! Explore my projects and experience.',
              channelId: CHANNEL_ID,
              schedule: { at: new Date(Date.now() + 2000) },
            },
          ],
        });
      } catch (err) {
        console.warn('Notification setup failed:', err);
      }
    };

    setupAndShowWelcome();
  }, []);

  return null;
}
