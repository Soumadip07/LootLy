import React from 'react'
import footer from '../../assets/footer.png';
import logo from '../../assets/logo.png';

function Footer() {
    return (
        <section className='footer' id='footer'>
            <div className='container footer-container justify-content-between my-4'>
                <div>
                    <img src={logo} alt='logo' className='footer-logo' />
                    {/* <h4>LootLy</h4> */}
                </div>
                <div>
                    <img src={footer} alt='footer-img' className='footer-cred-logo' />
                </div>
            </div>
        </section>
    )
}

export default Footer
