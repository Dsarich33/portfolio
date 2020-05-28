import React from 'react';

function ProjectList() {
    return (
        <>
            <div className='row'>
                <div className='col s12 m12 l6'>
                    <div className='card horizontal'>
                        <div className='card-image'>
                            <img src='/images/css-512.png' alt='cardImage' />
                        </div>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <span className='card-title'>Salon Service Group</span>
                                <p>eCommerce Theme implementation and design. Built on WebSphere Portal.</p>
                            </div>
                            <div className='card-action'>
                                <a className='waves-effect waves-light btn-flat' href='#!' onClick={() => window.open('https://store.salonservicegroup.com/wps/portal/c/products')}>
                                    <i className='material-icons left'>launch</i>Go To Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col s12 m12 l6'>
                    <div className='card horizontal'>
                        <div className='card-image'>
                            <img src='/images/css-512.png' alt='cardImage' />
                        </div>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <span className='card-title'>Widex USA</span>
                                <p>Web Application Development & eCommerce Theme development / Design implementation. Built on WebSphere Portal.</p>
                            </div>
                            <div className='card-action'>
                                <a className='waves-effect waves-light btn-flat' href='#!' onClick={() => window.open('https://www.mywidexpro.com/')}>
                                    <i className='material-icons left'>launch</i>Go To Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col s12 m12 l6'>
                    <div className='card horizontal'>
                        <div className='card-image'>
                            <img src='/images/css-512.png' alt='cardImage' />
                        </div>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <span className='card-title'>National FFA</span>
                                <p>Curalate social media integration / Design maintenance. Built on WebSphere Portal.</p>
                            </div>
                            <div className='card-action'>
                                <a className='waves-effect waves-light btn-flat' href='#!' onClick={() => window.open('https://shopffa.org/')}>
                                    <i className='material-icons left'>launch</i>Go To Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col s12 m12 l6'>
                    <div className='card horizontal'>
                        <div className='card-image'>
                            <img src='/images/css-512.png' alt='cardImage' />
                        </div>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <span className='card-title'>Fertilizer Dealer</span>
                                <p>eCommerce Theme Development & maintenance. Built on WebSphere Portal.</p>
                            </div>
                            <div className='card-action'>
                                <a className='waves-effect waves-light btn-flat' href='#!' onClick={() => window.open('https://www.fertilizerdealer.com/')}>
                                    <i className='material-icons left'>launch</i>Go To Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col s12 m12 l6'>
                    <div className='card horizontal'>
                        <div className='card-image'>
                            <img src='/images/css-512.png' alt='cardImage' />
                        </div>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <span className='card-title'>Davis Distribution</span>
                                <p>eCommerce Theme Development & maintenance. Built on WebSphere Portal.</p>
                            </div>
                            <div className='card-action'>
                                <a className='waves-effect waves-light btn-flat' href='#!' onClick={() => window.open('https://www.davisdealers.com/')}>
                                    <i className='material-icons left'>launch</i>Go To Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectList;
