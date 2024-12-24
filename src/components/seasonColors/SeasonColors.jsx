import React from 'react'
import './SeasonColors.css'
function SeasonColors() {
    return (
        <div>
            <h1>Fasl Ranglari</h1>
            <div class="season-container">
                <div class="season">
                    <span class="season-name">Bahor</span>
                    <div class="color-box spring"></div>
                </div>
                <div class="season">
                    <span class="season-name">Yoz</span>
                    <div class="color-box summer"></div>
                </div>
                <div class="season">
                    <span class="season-name">Kuz</span>
                    <div class="color-box autumn"></div>
                </div>
                <div class="season">
                    <span class="season-name">Qish</span>
                    <div class="color-box winter"></div>
                </div>
            </div>
        </div>
    )
}

export default SeasonColors