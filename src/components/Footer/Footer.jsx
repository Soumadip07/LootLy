import React from 'react'
import footer from '../../assets/footer.png';
import logo from '../../assets/logo.png';

function Footer() {
    return (
        <section className='footer' id='footer'>
            <div className='container justify-content-between my-4 justify-content-between'>
                <div>
                    <img src={logo} alt='logo' />
                    {/* <h4>LootLy</h4> */}
                </div>
                <div>
                    <img src={footer} alt='footer-img' />
                </div>
            </div>
        </section>
    )
}

export default Footer
