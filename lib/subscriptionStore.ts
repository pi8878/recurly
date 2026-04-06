import { HOME_SUBSCRIPTIONS } from '@/constants/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

const STORAGE_KEY = 'subscriptions';

const loadSubscriptions = async (): Promise<Subscription[]> => {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : HOME_SUBSCRIPTIONS;
  } catch (error) {
    console.error('Failed to load subscriptions from storage:', error);
    return HOME_SUBSCRIPTIONS;
  }
};

const saveSubscriptions = async (subscriptions: Subscription[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
  } catch (error) {
    console.error('Failed to save subscriptions to storage:', error);
  }
};

interface SubscriptionStore {
  subscriptions: Subscription[];
  addSubscription: (subscription: Subscription) => void;
  setSubscriptions: (subscriptions: Subscription[]) => void;
  loadFromStorage: () => Promise<void>;
}

export const useSubscriptionStore = create<SubscriptionStore>((set, get) => ({
  subscriptions: HOME_SUBSCRIPTIONS,
  addSubscription: async (subscription) => {
    const newSubscriptions = [subscription, ...get().subscriptions];
    set({ subscriptions: newSubscriptions });
    await saveSubscriptions(newSubscriptions);
  },
  setSubscriptions: async (subscriptions) => {
    set({ subscriptions });
    await saveSubscriptions(subscriptions);
  },
  loadFromStorage: async () => {
    const subscriptions = await loadSubscriptions();
    set({ subscriptions });
  },
}));
