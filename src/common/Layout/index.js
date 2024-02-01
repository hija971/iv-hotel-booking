import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, isHeaderLandingPage, isMobileDevice, keyword }) => {
    return (
      <div>
        <Header
          isHeaderLandingPage={isHeaderLandingPage}
          isMobileDevice={isMobileDevice}
          keyword={keyword}
        />
        {children}
        <Footer isMobileDevice={isMobileDevice} />
      </div>
    )
  }
  
  export default Layout