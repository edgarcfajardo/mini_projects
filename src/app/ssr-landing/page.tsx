import { HeaderLanding } from "@/components/landing/HeaderLanding"
import { PrincipalContent } from "@/components/landing/PrincipalContent"
import { QuickTour } from "@/components/landing/QuickTour"
import { TopBanner } from "@/components/landing/TopBanner"

const LandingPage = () => {
    return (
        <div>
            < TopBanner />
            < HeaderLanding />
            < PrincipalContent />
            < QuickTour />
        </div>
    )
}

export default LandingPage