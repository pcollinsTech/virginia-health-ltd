import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"
class PrivacyPage extends React.Component {
  render() {
    const img = <Img fixed={this.props.data.file.childImageSharp.fixed.src} />
    return (
      <Layout>
        <SEO title="Home" />
        <Banner img={img} title="Privacy Statement" />
        <Container className="text-center my-5">
          <Row>
            <p className="home_text">
              This Privacy Statement provides details of how Virginia Health
              Foods collects, uses, holds and discloses information collected
              from users (“User”) of the{" "}
              <a href="www.virginafoods.net" target="__blank">
                www.virginafoods.net
              </a>{" "}
              website (“Site”).
            </p>
            <p>
              Virginia Health Foods is committed to protecting your privacy and
              the security of any personal information received from you. We
              strictly adhere to the requirements of EU Data Protection under
              the General Data Protection Regulations ( GDPR)
            </p>
            <p>
              This statement is to explain to you what personal information we
              collect and how we may use it.
            </p>
            <h2>1. Personal information</h2>
            <p>
              We may collect personal information from Users in a variety of
              ways, including, but not limited to, when Users visit our site,
              make a purchase, subscribe to our newsletter, submit a contact
              form or competition entry form, and in connection with other
              activities, services, or resources we make available on our site.
              Users may be asked for, as appropriate, name, email address,
              mailing address, phone number and credit card information.
            </p>
            <p>
              We may collect personal information from Users in a variety of
              ways, including, but not limited to, when Users visit our site,
              make a purchase, subscribe to our newsletter, submit a contact
              form or competition entry form, and in connection with other
              activities, services, or resources we make available on our site.
              Users may be asked for, as appropriate, name, email address,
              mailing address, phone number and credit card information.When you
              make a purchase any information you submit – for example: your
              name, email address and payment are totally safe and secure. We
              comply fully with all applicable Data Protection and consumer
              legislation and treat all your personal information as fully
              confidential. Any data we collect is used to fulfil your order,
              improve our products and services and, (only if you have opted in)
              send you Virginia Health Foods promotional emails to the email
              address submitted.
            </p>
            <p>
              To receive details of, to rectify or to request deletion of the
              personal information we store about you, please contact us using
              the methods outlined below.
            </p>
            <h2>2. Non-personal identification information</h2>
            <p>
              We may collect non-personal identification information about Users
              whenever they interact with our Site. Non-personal identification
              information may include the User country, browser name, the type
              of computer and technical information about Users means of
              connection to our Site, such as the operating system and the
              Internet service providers utilised and other similar information.
            </p>
            <h2>3. How we use collected information</h2>
            <p>
              Virginia Health Foods collects and uses Users personal information
              for the following purposes:
            </p>
            <ul>
              <li>
                <b>To improve customer service</b>
                Your information helps us to more effectively respond to your
                customer service requests and support needs.
              </li>
              <li>
                <b>To improve our Site</b>
                We continually strive to improve our website offerings based on
                the information and feedback we receive from you.
              </li>
              <li>
                <b>To process transactions</b>
                We may use the information Users provide about themselves when
                placing an order only to fulfill the order. We do not share this
                information with outside parties except to the extent necessary
                to provide the filfillment service e.g. to send transaction
                confirmation emails.
              </li>
              <li>
                <b>To send periodic emails</b>
                The email address Users provide for order processing, will only
                be used to send them information and updates pertaining to their
                order. It may also be used to respond to their inquiries, and/or
                other requests or questions.
              </li>
            </ul>
            <p>
              If a User decides to opt-in to our mailing list, they will receive
              emails that may include company news, updates, blogs or product or
              service information etc. We may also invite Users to participate
              in surveys or programs, or to notify about special events. If at
              any time the User would like to unsubscribe from receiving future
              emails, we include detailed unsubscribe instructions at the bottom
              of each email or User may contact us via our Site.
            </p>
            <h2>4. How we protect your information</h2>
            <p>
              We understand that the security of your personal data is
              important. We make our best efforts – and require the same from
              any service provider and/or third party processor processing
              Personal Data on our behalf and under our instructions – to
              protect your personal data from misuse, interference, loss,
              unauthorized access, modification or disclosure. We have
              implemented a number of security measures to help protect your
              personal data. For example, we implement access controls, use
              firewalls and secure servers, and we encrypt personal data.
            </p>
            <p>
              Despite the security measures that we have put in place to protect
              your Personal Data, we cannot guarantee that loss, misuse, or
              alteration of data will not occur.
            </p>
            <h2>5. Links to Other Sites</h2>
            <p>
              Users may find content on our Site that links to third party
              sites. These linked sites are independent and Virginia Health
              Foods has no responsibility or liability for content delivered on
              these platforms.
            </p>

            <h2>6. Changes to this Privacy Statement</h2>
            <p>
              Virginia Health Foods reserves the right to update this privacy
              policy at any time. You acknowledge and agree that it is your
              responsibility to review this privacy policy periodically and
              become aware of modifications.
            </p>
            <h2>7. Your rights</h2>
            <p>
              Where we process your personal data, you have a number of rights
              and can exercise these rights at any point. We have provided an
              overview of these rights below together with what this means for
              you. You can exercise your rights via our contact page.
            </p>
            <ul>
              <li>
                <b>The right to access your personal data and correction</b>
                You have the right to access, correct or update your personal
                data at any time. We understand the importance of this and
                should you want to exercise your rights, please contact us.
              </li>
              <li>
                <b>The right to data portability</b>
                Your personal data is portable. This means it can be moved,
                copied or transmitted electronically. However, this right only
                applies where:
                <ul>
                  <li>The processing is based on your consent;</li>
                  <li>
                    The processing takes place for the performance of a
                    contract;
                  </li>
                  <li>The processing takes place by automated means</li>
                </ul>
                <p>
                  If you wish to exercise your right to data portability, please
                  contact us.
                </p>
              </li>
              <li>
                <b>The right to deletion of your personal data</b>
                You have right to request that we delete your data if:
                <ul>
                  <li>
                    – your personal data is no longer necessary in relation to
                    the purposes for which we collected it; or
                  </li>
                  <li>
                    you withdraw the consent that you had previously given us to
                    process your personal data, and there is no other legal
                    ground to process that personal data; or
                  </li>
                  <li>
                    you object to us processing your personal data for direct
                    marketing purposes; or
                  </li>
                  <li>
                    you object to us processing your personal data for Virginia
                    Health Foods’ legitimate interests (such as improving
                    overall user experience on websites);
                  </li>
                  <li>the personal data is not being processed lawfully; or</li>
                  <li>
                    your personal data needs to be deleted to comply with the
                    law.
                  </li>
                </ul>
                <p>
                  If you wish to delete the personal data we hold about you,
                  please let us know and we will take reasonable steps to
                  respond to your request in accordance with legal requirements.
                </p>
                <p>
                  If the personal data we collect is no longer needed for any
                  purposes and we are not required by law to retain it, we will
                  do what we can to delete or destroy it For direct marketing
                  purposes, we will delete, destroy or permanently de-identify
                  your personal data 3 years after the latest contact with you,
                  unless shorter or longer retention periods apply under law.
                </p>
              </li>
              <li>
                <b>The right to restriction of processing</b>
                You have the right to restrict the processing of your personal
                data if:
                <ul>
                  <li>
                    you do not believe the personal data we have about you is
                    accurate; or
                  </li>
                  <li>
                    the personal data is not being processed lawfully, but
                    instead of deleting the personal data, you would prefer us
                    to restrict processing instead; or
                  </li>
                  <li>
                    we no longer need your personal data for the purposes we
                    collected it, but you require the data in order to
                    establish, exercise or defend legal claims; or
                  </li>
                  <li>
                    you have objected to the processing of your personal data
                    and are awaiting verification on whether your interests
                    related to that objection outweigh the legitimate grounds
                    for processing your data.
                  </li>
                </ul>
                <p>
                  If you wish to restrict our processing of your personal data,
                  please let us know and we will take reasonable steps to
                  respond to your request in accordance with legal requirements.
                </p>
              </li>
              <li>
                <b>The right to object</b>
                You have the right to object to the processing of your personal
                data, for which you can contact us at any time.
              </li>
              <li>
                <b>
                  The right to lodge a complaint with a supervisory authority
                </b>
                You have the right to lodge a complaint directly with the Data
                Protection Commission if you have an issue with how we process
                personal data.
              </li>
            </ul>
            <h2>Contacting us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please contact us
              at{" "}
              <a href="mailto:info@virginiafoods.net">info@virginiafoods.net</a>
              This privacy statement was last updated on Oct 22nd 2019.
            </p>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default PrivacyPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "bannerOne.png" }) {
      childImageSharp {
        fixed(width: 1048, height: 393) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`
