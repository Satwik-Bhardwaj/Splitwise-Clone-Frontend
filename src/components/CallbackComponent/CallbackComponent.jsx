import React, { useEffect, useState } from 'react';
import './CallbackComponent.css';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function CallbackComponent({children}) {

    const [callbackParams] = useSearchParams();

    const state = callbackParams.get("state");
    const code = callbackParams.get("code");

    console.log(state);
    console.log(code);

    useEffect(() => {
        const fetchCallbackData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/oauth2/callback', {
                    params: {
                        state : state,
                        code : code
                    }
                });
                console.log('Response', response.data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchCallbackData();
    }, []);

    return (
        <div className='callback-container'>
            <div className="callback-canvas">
                <p className='callback-loading-p'>Loading...</p>
            </div>
            {children}
        </div>
    )
}

export default CallbackComponent;