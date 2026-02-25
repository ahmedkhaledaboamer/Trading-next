import { ServicesPageClient } from '@/components/screens/services/ServicesPageClient'
import { getLocale } from 'next-intl/server';

export default async function ServicesPage() {
  const locale = await getLocale();
  return <ServicesPageClient locale={locale} />
}