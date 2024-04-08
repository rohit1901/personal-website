"use client"
import React, {useEffect, useRef} from 'react';
import {useScript} from "usehooks-ts";


const SubstackWidget = () => {
    const status = useScript(`https://substackapi.com/widget.js`, {
        removeOnUnmount: false,
        id: 'custom-substack-script',
    })
    const customSubstackRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // @ts-ignore
        window.CustomSubstackWidget = {
            substackUrl: "rohitkhanduri.substack.com",
            placeholder: "example@host.com",
            buttonText: "Subscribe",
        };
    }, []);

    useEffect(() => {
        if (status === 'ready') {
            const forms = customSubstackRef.current?.getElementsByTagName('form')
            if (!forms) {
                console.error('No forms found in custom substack widget')
                return
            }
            const customSubstackForm = Array.from(forms)
                .find((form) => form.className === "custom-substack-widget csw-theme-default")
            if (!customSubstackForm) {
                console.error('No custom substack form found')
                return
            }
            customSubstackForm.classList.remove("custom-substack-widget", "csw-theme-default");
        }
    }, [status])
    return (
        <div id="custom-substack-embed" className="w-full" ref={customSubstackRef}></div>
    );
};

export default SubstackWidget;