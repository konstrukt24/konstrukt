"use client";

import { useEffect } from "react";
import "./menu.css";

const Menu = () => {
    useEffect(() => {
        function randomCharacter() {
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            return chars[Math.floor(Math.random() * chars.length)];
        }

        function setInitialDataTextAttribute() {
            const elements = document.querySelectorAll("p, a");
            elements.forEach((el) => {
                const textContent = el.textContent.trim();
                if (!el.getAttribute("data-text") && textContent) {
                    el.setAttribute("data-text", textContent);
                    el.textContent = "";
                }
            });
        }

        function revealedText(element) {
            const originalText = element.getAttribute("data-text");
            let revealedText = "";
            let index = 0;

            function revealNextLetter() {
                if (index < originalText.length) {
                    revealedText += originalText[index];
                    let tempText = revealedText;

                    for (let i = index + 1; i < originalText.length; i++) {
                        tempText += randomCharacter();
                    }

                    element.textContent = tempText;
                    index++;

                    setTimeout(revealNextLetter, 150);
                } else {
                    element.textContent = originalText;
                }
            }

            revealNextLetter();
        }

        setInitialDataTextAttribute();

        const elements = document.querySelectorAll("p[data-text], a[data-text]");
        elements.forEach((el) => {
            revealedText(el);
        });
    }, []);

    return (
        <div className="page-content">
            <div className="nav-item">
                
                <div className="nav-item-col">
                    <p>konstrukt</p>
                </div>

                <div className="nav-item-col">
                    <p>Kulture & Kreativity</p> 
                    <p>Support & Development</p>
                </div>

                <div className="nav-item-col">
                    <p>Founded in 2024</p> 
                    <p>Astrakhan, RU</p>
                </div>
            </div>

            <div className="footer-info">
                <div className="menu-info-col">
                    <p>Designed by</p> 
                    <p>konstrukt</p>
                </div>

                <div className="menu-info-col">
                    <a href="https://t.me/prazdniki_astrakhan" target="_blank" rel="noopener noreferrer">
                        Telegram
                    </a>

                    <a href="https://vk.com/fabrika.schastya" target="_blank" rel="noopener noreferrer">
                        VKontakte
                    </a>
                </div>

                <div className="menu-info-col">
                    <a href="mailto:LeraEmY@mail.ru" target="_blank" rel="noopener noreferrer">
                        LeraEmY@mail.ru
                    </a>

                    <a href="tel:79378272664" target="_blank" rel="noopener noreferrer">
                        +7 (937) 827-26-64
                    </a>
                </div>

                <div className="menu-info-col">
                    <p>414000, Astrakhan</p>
                    <p>st. Kirova, 19</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
