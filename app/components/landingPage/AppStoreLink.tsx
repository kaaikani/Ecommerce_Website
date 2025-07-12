import clsx from 'clsx'

export function AppStoreLink({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.kaaikani.kaaikani&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the Google Play Store"
      className={clsx(
        'rounded-lg transition-colors inline-block',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50'
      )}
    >
      <img
        src="/playstore.png"
        alt="Get it on Google Play"
        className="h-10"
      />
    </a>
  )
}
