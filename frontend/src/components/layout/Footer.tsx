function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#707072" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#707072" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="#707072" stroke="none" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#707072" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#707072" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#707072" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <path d="M22 16.92V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C17.0071 21.93 14.0925 20.9799 11.58 19.25C9.26227 17.6842 7.31577 15.7377 5.75 13.42C4.0201 10.9075 3.07003 7.99288 3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H8.08C8.29732 2.99976 8.50835 3.07381 8.67675 3.2092C8.84514 3.34459 8.96004 3.53321 9 3.74C9.15189 4.55211 9.39123 5.3463 9.71 6.11C9.79623 6.32616 9.82309 6.56216 9.78788 6.79237C9.75267 7.02259 9.65679 7.23799 9.51 7.42L8.1 9.09C9.58125 11.7479 11.7521 13.9188 14.41 15.4L16.08 14C16.4521 13.6559 16.9504 13.5116 17.43 13.6C18.2037 13.9006 19.0068 14.1247 19.82 14.27C20.0286 14.3105 20.2184 14.4235 20.3536 14.5904C20.4887 14.7573 20.5607 14.967 20.56 15.18L22 16.92Z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#707072" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
      <path d="M22 6L12 13L2 6" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-light-gray">
      <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 py-9 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Brand */}
          <div className="text-center">
            <img src="/logo.svg" alt="Badminton Store" className="mx-auto mb-3 h-9 w-9" />
            <p className="text-[14px] font-body text-text-secondary leading-[1.86] mb-5">
              Your trusted partner for premium badminton equipment and sportswear. Quality products for champions.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href="#" className="bg-white rounded-full p-[7px] hover:bg-hover-gray transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="bg-white rounded-full p-[7px] hover:bg-hover-gray transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="bg-white rounded-full p-[7px] hover:bg-hover-gray transition-colors" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: General Information */}
          <div>
            <h4 className="text-[16px] font-body-medium text-text-primary mb-3 leading-[1.50]">
              General Information
            </h4>
            <p className="text-[14px] font-body text-text-secondary leading-[1.86] mb-2">
              <span className="italic">Mission Statement:</span> Our mission is to offer the best products and services for athletes to stay active and live healthier lives.
            </p>
            <p className="text-[14px] font-body text-text-secondary leading-[1.86]">
              <span className="italic">Slogan:</span> "Where Quality Meets Athletic Spirit."
            </p>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="text-[16px] font-body-medium text-text-primary mb-3 leading-[1.50]">
              Customer Service
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/about-us" className="text-[14px] font-body-medium text-text-secondary leading-[1.86] hover:text-text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[14px] font-body-medium text-text-secondary leading-[1.86] hover:text-text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/shipping-info" className="text-[14px] font-body-medium text-text-secondary leading-[1.86] hover:text-text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-[16px] font-body-medium text-text-primary mb-3 leading-[1.50]">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <LocationIcon />
                <span className="text-[14px] font-body text-text-secondary leading-[1.86]">
                  87 Tran Phu, Ward 4,<br />District 5, Ho Chi Minh City
                </span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon />
                <span className="text-[14px] font-body text-text-secondary leading-[1.86]">
                  +833654880
                </span>
              </li>
              <li className="flex items-start gap-2">
                <EmailIcon />
                <span className="text-[14px] font-body text-text-secondary leading-[1.86]">
                  support@badmintonstore.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-secondary mt-10 pt-4">
          <p className="text-[12px] font-body text-text-secondary text-center leading-[1.50]">
            &copy; 2025 Badminton Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
