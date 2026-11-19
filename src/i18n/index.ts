import ru from './ru.json';

function flattenMessages(nested: Record<string, any>, prefix = ''): Record<string, string> {
  return Object.keys(nested).reduce((acc, key) => {
    const value = (nested as any)[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(acc, flattenMessages(value, prefixedKey));
    } else {
      acc[prefixedKey] = String(value);
    }
    return acc;
  }, {} as Record<string, string>);
}

export const messages = {
  'ru': flattenMessages(ru as unknown as Record<string, any>),
};

export const defaultLocale = 'ru';



