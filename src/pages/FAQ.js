import NavBar from '../NavBar';
import useState from 'react-usestateref'
import { auth0, getBasketItemAll } from '../https/Api';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';


function FAQ() {
  const [skoka,setskoka,setskokaRef] = useState(null)
  const getBasketItem = async() => {
   
    const storedToken = localStorage.getItem('token');
    if(storedToken==null || storedToken==undefined){
      await auth0()
      getBasketItem()
    }else{
      const userId = jwtDecode(storedToken)
      console.log(userId.id)
      const basketitem = await getBasketItemAll(userId.id)
  
      let skok = 0
      const skok1 = basketitem.map(item=> skok = Number(skok) + Number(item.qauantity))
      setskoka(skok)
    }

    

  }
  useEffect(()=>{
    if(setskokaRef?.current==null){
      getBasketItem()
    }
  })
  return (
    <div className="App">

<NavBar skoka={setskokaRef?.current}/>

<main>
    <div class="mb-5 pb-4"></div>
    <section class="container mw-930 lh-30">
      <h2 class="section-title text-uppercase fw-bold mb-5">FREQUENTLY ASKED QUESTIONS</h2>
      <h3 class="mb-4">Orders</h3>      
      <div id="faq_accordion" class="faq-accordion accordion mb-5">
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-1" aria-expanded="true" aria-controls="faq-accordion-collapse-1">
              Bring of had which their whose you're it own?
              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-1" class="accordion-collapse collapse show" aria-labelledby="faq-accordion-heading-1" data-bs-parent="#faq_accordion">
            <div class="accordion-body">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-2" aria-expanded="false" aria-controls="faq-accordion-collapse-2">
              Over shall air can't subdue fly divide him?
              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-2" class="accordion-collapse collapse" aria-labelledby="faq-accordion-heading-2" data-bs-parent="#faq_accordion">
            <div class="accordion-body">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-3" aria-expanded="false" aria-controls="faq-accordion-collapse-3">
              Waters one you'll creeping?
              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-3" class="accordion-collapse collapse" aria-labelledby="faq-accordion-heading-3" data-bs-parent="#faq_accordion">
            <div class="accordion-body">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
      </div>
      <h3 class="mb-4">Shipping</h3>      
      <div id="faq_accordion_2" class="faq-accordion accordion mb-5">
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-2-1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-2-1" aria-expanded="true" aria-controls="faq-accordion-collapse-2-1">
              Bring of had which their whose you're it own?
              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-2-1" class="accordion-collapse collapse show" aria-labelledby="faq-accordion-heading-2-1" data-bs-parent="#faq_accordion_2">
            <div class="accordion-body">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-2-2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-2-2" aria-expanded="false" aria-controls="faq-accordion-collapse-2-2">
              Over shall air can't subdue fly divide him?
              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-2-2" class="accordion-collapse collapse" aria-labelledby="faq-accordion-heading-2-2" data-bs-parent="#faq_accordion_2">
            <div class="accordion-body">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-2-3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-2-3" aria-expanded="false" aria-controls="faq-accordion-collapse-2-3">
              Waters one you'll creeping?
              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-2-3" class="accordion-collapse collapse" aria-labelledby="faq-accordion-heading-2-3" data-bs-parent="#faq_accordion_2">
            <div class="accordion-body">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
      </div>
      <h3 class="mb-4">Shipping & Payment</h3>      
      <div id="faq_accordion_3" class="faq-accordion accordion mb-5">
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-3-1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-3-1" aria-expanded="true" aria-controls="faq-accordion-collapse-3-1">
            Shipping & Payment              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-3-1" class="accordion-collapse collapse show" aria-labelledby="faq-accordion-heading-3-1" data-bs-parent="#faq_accordion_3">
            <div class="accordion-body">
              <p>Time - If you decide to return the product, you have 60 days to return the product from the date of purchase. Delivery - We deliver to all European countries by international DPD/COLISSIMO services, depending on your location, within 14 days. Payment is accepted with any cards of your country - Visa / MasterCard / Credit Card. Return method - the refund is made in the same way that was used to pay for the goods. The condition of the goods - To return the goods must be free of damage and dents, packed and shipped in the original packaging. Contact information for refunds - each refund is considered individually, you can contact us by e-mail to arrange a refund of the cost of the goods - Each return of the goods implies shipment and verification in our company, delivery of the goods to us is paid separately by the customer who bought the goods, if if you have any If you have any questions, you can contact us by email wetlove.support@gmail.com </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-3-2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-3-2" aria-expanded="false" aria-controls="faq-accordion-collapse-3-2">
            How do you pack the goods?
            <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-3-2" class="accordion-collapse collapse" aria-labelledby="faq-accordion-heading-3-2" data-bs-parent="#faq_accordion_3">
            <div class="accordion-body">
              <p>We ship the goods in an air-protected package, additionally we wrap the goods in black thick paper, which will ensure the confidentiality of the parcel
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-3-3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-3-3" aria-expanded="false" aria-controls="faq-accordion-collapse-3-3">
            What if I live very far away?
            <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-3-3" class="accordion-collapse collapse" aria-labelledby="faq-accordion-heading-3-3" data-bs-parent="#faq_accordion_3">
            <div class="accordion-body">
              <p>If your location is outside of European countries, then we will definitely find a way to deliver your favorite product to you for free
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 class="mb-4">      Privacy Policy
      </h3>      
      <div id="faq_accordion_3" class="faq-accordion accordion mb-5">
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-3-1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-3-1" aria-expanded="true" aria-controls="faq-accordion-collapse-3-1">
            Privacy Policy
            <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-3-1" class="accordion-collapse collapse show" aria-labelledby="faq-accordion-heading-3-1" data-bs-parent="#faq_accordion_3">
            <div class="accordion-body">
              <p>This Privacy Policy describes how your personal information is collected, used and transmitted when you visit the site or make a purchase on it.

Personal information we collect
When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.

We collect Device Information using the following technologies:
- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
- “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.

Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as “Order Information”.

When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.

How do we use your personal information?
We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
- Communicate with you;
- Screen our orders for potential risk or fraud; and
- When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.

We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
Sharing your personal Information

We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use ecwid.com to power our online store -- ecwid.com. We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout


Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.

Behavioural advertising
As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.

You can opt out of targeted advertising by using the links below:
- Facebook: https://www.facebook.com/settings/?tab=ads
- Google: https://www.google.com/settings/ads/anonymous
- Bing: https://help.ads.microsoft.com/#apex/3/en-us/51029

Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/.

Do not track
Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.

Your rights
If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.

Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.

Data retention
When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.

Changes
We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.

Minors
The site is intended, among other things, for people older the age of 18

Contact us
For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at david.krick750@gmail.com </p>
            </div>
          </div>
        </div>

      </div>
      <h3 class="mb-4">      Return Policy
      </h3>      
      <div id="faq_accordion_3" class="faq-accordion accordion mb-5">
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-3-1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-3-1" aria-expanded="true" aria-controls="faq-accordion-collapse-3-1">
            Return Policy

              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-3-1" class="accordion-collapse collapse show" aria-labelledby="faq-accordion-heading-3-1" data-bs-parent="#faq_accordion_3">
            <div class="accordion-body">
              <p>To be eligible for a refund you must email us at wetlove.support@gmail.com within 60 calendar days of your purchase


After we receive your request we process your refund if it satisfies our eligibility checks(no dents or scratches).

If the you have initiated the refund request after 60 calendar days have passed you will not be eligible for a refund.

We offer refunds on a discretionary basis, and each refund request is looked at individually. We do our best to provide a refund where possible.

Once your refund request has been received and considered, we will send you an email to notify you of the approval or rejection of your refund.

If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment.

If you are unhappy with your purchase for any reason, please get in touch with us by emailing us at wetlove.support@gmail.com

Late or missing refunds

If you haven’t received a refund yet, first check your bank account again.

Then contact your credit card company, it may take some time before your refund is officially posted.

Next contact your bank. There is often some processing time before a refund is posted.

If you’ve done all of this and you still have not received your refund yet, please contact us at wetlove.support@gmail.com </p>
            </div>
          </div>
        </div>
   
      </div>
      
      <h3 class="mb-4">Edit Terms & Conditions</h3>      
      <div id="faq_accordion_3" class="faq-accordion accordion mb-5">
        <div class="accordion-item">
          <h5 class="accordion-header" id="faq-accordion-heading-3-1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-accordion-collapse-3-1" aria-expanded="true" aria-controls="faq-accordion-collapse-3-1">
            Edit Terms & Conditions
              <svg class="accordion-button__icon" viewBox="0 0 14 14"><g aria-hidden="true" stroke="none" fill-rule="evenodd"><path class="svg-path-vertical" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path><path class="svg-path-horizontal" d="M14,6 L14,8 L0,8 L0,6 L14,6"></path></g></svg>
            </button>
          </h5>
          <div id="faq-accordion-collapse-3-1" class="accordion-collapse collapse show" aria-labelledby="faq-accordion-heading-3-1" data-bs-parent="#faq_accordion_3">
            <div class="accordion-body">
              <p>

              Terms & Conditions

OVERVIEW

This website is operated by Wet Love. Throughout the site, the terms “we”, “us” and “our” refer to Wet Love. Wet Love offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.



By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.



Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.



Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.



Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.



SECTION 1 - ONLINE STORE TERMS

By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.

You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).

You must not transmit any worms or viruses or any code of a destructive nature.

A breach or violation of any of the Terms will result in an immediate termination of your Services.



SECTION 2 - GENERAL CONDITIONS

We reserve the right to refuse service to anyone for any reason at any time.

You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.

You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.

The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.



SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION

We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.

This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.



SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES

Prices for our products are subject to change without notice.

We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.

We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.



SECTION 5 - PRODUCTS OR SERVICES (if applicable)

Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.

We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.

We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.

We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.



SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION

We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.



You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.



For more detail, please review our Return and Refund Policy (see Quick Links below).



SECTION 7 - OPTIONAL TOOLS

We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.

You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.

Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).

We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.



SECTION 8 - THIRD-PARTY LINKS

Certain content, products and services available via our Service may include materials from third-parties.

Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.

We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.



SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS

If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.

We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.

You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.



SECTION 10 - PERSONAL INFORMATION

Your submission of personal information through the store is governed by our Privacy Policy (see Quick Links below).



SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS

Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).

We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.



SECTION 12 - PROHIBITED USES

In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.



SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY

We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.

We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.

You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.

You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.

In no case shall Destiny Emblems, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.



SECTION 14 - INDEMNIFICATION

You agree to indemnify, defend and hold harmless Destiny Emblems and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.



SECTION 15 - SEVERABILITY

In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.



SECTION 16 - TERMINATION

The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.

These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).



SECTION 17 - ENTIRE AGREEMENT

The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.

These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.



SECTION 18 - GOVERNING LAW

These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United Kingdom.



SECTION 19 - CHANGES TO TERMS OF SERVICE

You can review the most current version of the Terms of Service at any time at this page.

We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.



SECTION 20 - CONTACT INFORMATION

Questions about the Terms of Service should be sent to us at

wetlove.support@gmail.com
              </p>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  </main>

  <div class="mb-5 pb-xl-5"></div>


  

  



  <div id="scrollTop" class="visually-hidden end-0"></div>

  <div class="page-overlay"></div>
    </div>
  );
}

export default FAQ;
