import NavBar from "./NavBar"

const Faqs = () => {
    return(
        <div>
            <NavBar />
        
            <section class="py-24 bg-white">
                <div class="bg-green-100  px-8 mx-auto max-w-7xl lg:px-16">
                    <h2 class="rounded-full underline mb-4 text-xl font-bold md:text-3xl">Frequently Asked Questions</h2>
                    <div class="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                        <div>
                            <h5 class="mt-10 mb-3 font-semibold text-gray-900">Are there refunds for donations?</h5>
                            <p>No, once you donated THERES NO refund.</p>
                            <h5 class="mt-10 mb-3 font-semibold text-gray-900">Is there a specific amount i need to donate?</h5>
                            <p>Absolutely not, how much you wish to donate is of your own accord.</p>
                            <h5 class="mt-10 mb-3 font-semibold text-gray-900">Are the campaigns legitimate?</h5>
                            <p>
                                Yes, 100% <a href="https://devdojo.com/pro" class="text-indigo-500 underline">The Pro Upgrade Page</a>. You will also gain access to many other applications and sections of the site.
                                <a href="https://help.hellonext.co/faq/startup-eligibility/" target="_blank">here</a>.
                            </p>
                            <h5 class="mt-10 mb-3 font-semibold text-gray-900">Will Valyrians take part of the donations?</h5>
                            <p>
                                No, Valyrians are a group of Non-profit organisation that aims to help those in need through this platform.
                                <a href="https://paddle.com" target="_blank">Paddle</a> for processing payments.
                            </p>
                        </div>
                        <div>
                            <h5 class="mt-10 mb-3 font-semibold text-gray-900">How do I implement into my project</h5>
                            <p>Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your own page.</p>
                            <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is the license on the pages?</h5>
                            <p>You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.</p>
                            <h5 class="mt-10 mb-3 font-semibold text-gray-900">Can I cancel my account if I not longer need it?</h5>
                            <p>Of course, you can feel free to cancel your account at anytime, and you can feel free to come back and upgrade again whenever you're ready.</p>
                            <h5 class="mt-10 mb-3 font-semibold text-gray-900">What if I need help with my project?</h5>
                            <p>If you need assistance implementing the templates into your project you can contact support or you can visit our <a href="https://devdojo.com/questions" class="text-indigo-500 underline">question section</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}

export default Faqs;