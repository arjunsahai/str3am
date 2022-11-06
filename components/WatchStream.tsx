import {
    Player,
  } from '@livepeer/react';
import { useState } from 'react';
import  Script  from 'next/script';
import { GatedWatchStreamButton } from './GatedWatchStreamButton';
  
  export const WatchStream = () => {
    const [playbackId, setPlaybackId] = useState<string>('');
    const [renderPlayer, setRenderPlayer] = useState<boolean>(false)
    const setRenderPlayerChild = (value: boolean) => {setRenderPlayer(value)}

    return (
      <div>
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
            Playback ID
          </label>
          <div className="my-4">
            <input
              type="text"
              name="playbackId"
              id="playbackId"
              className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="playbackId"
              onChange={event => setPlaybackId(event.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
        <Script id="Subscribe">
            {`(function(d, s) {
                var js = d.createElement(s),
                  sc = d.getElementsByTagName(s)[0];
                js.src="https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
                sc.parentNode.insertBefore(js, sc); }(document, "script"));`}
          </Script>
          <Script id="unlockProtocalConfig">
            {`
            var unlockProtocolConfig = {
              "network": 5, // Network ID (1 is for mainnet, 4 for rinkeby, 100 for xDai, etc)
              "locks": {
                "0xef360e926949e8083e4aa0fbd249c6b4a26e232a": {
                  "name": "Sub2Me"
                },
              },
              "icon": "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
              "callToAction": {
                "default": "Please unlock this demo!"
              }
            }
            `}
          </Script>
            <GatedWatchStreamButton renderPlayer={setRenderPlayerChild} ></GatedWatchStreamButton>
        {/* <button
          onClick={async () =>
            {
              setRenderPlayer(true)
            }
          }>
          Watch Stream
        </button> */}
        {renderPlayer && (
          <>
            <Player playbackId={playbackId} />
          </>
        )}
      </div>
    );
  };
  