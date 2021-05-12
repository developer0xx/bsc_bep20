import React from 'react'


const PreventMultiTabs = () => (

    <div class="main-container">
    <div class="video-container">
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="assets/videos/landing-page-video.mov" type="video/mp4" />
        </video>
        <div class="content-container h-100">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-center d-flex flex-column content">
                    <a href="index.html" class="logo">
                        <img class="img-fluid" src="assets/images/g-logo.svg" alt="Logo" />
                    </a>
                    <a class="btn cstm-btn white-bg">BitEmpire platform supports only one active tab. Please, to continue using BitEmpire platform close this tab</a>

                  </div>
            </div>
        </div>
    </div>
</div>

)
export default PreventMultiTabs
 