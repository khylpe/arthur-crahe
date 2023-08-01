import { Footer as FooterFlowbite } from 'flowbite-react';
import { useTheme } from './../contexts/themeContext';
import logoBlack from './../img/black.png'
import logoWhite from './../img/white.png'

const Footer = (props) => {
       const { theme } = useTheme();

       return (
              <FooterFlowbite className='pb-5 px-9 mt-52 header rounded-none'>
                     <div className="w-full text-center mt-3">
                            <div className="justify-between sm:flex sm:items-center sm:justify-between">
                                   <FooterFlowbite.Brand
                                          alt="Arthur CRAHE logo"
                                          href="https://crahe-arthur.com"
                                          name="Arthur CRAHE"
                                          src={theme === 'light'? logoBlack : logoWhite}
                                   />
                                   <FooterFlowbite.LinkGroup>
                                          <FooterFlowbite.Link href="#">
                                                 About
                                          </FooterFlowbite.Link>
                                          <FooterFlowbite.Link href="#">
                                                 Privacy Policy
                                          </FooterFlowbite.Link>
                                          <FooterFlowbite.Link href="#">
                                                 Licensing
                                          </FooterFlowbite.Link>
                                          <FooterFlowbite.Link href="#">
                                                 Contact
                                          </FooterFlowbite.Link>
                                   </FooterFlowbite.LinkGroup>
                            </div>
                            <FooterFlowbite.Divider className='my-3 lg:my-3' />
                            <FooterFlowbite.Copyright
                                   by="Arthur CRAHE"
                                   href="#"
                                   year={"2023 "}
                            />
                     </div>
              </FooterFlowbite>)
}

export default Footer;
