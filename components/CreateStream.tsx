import {
    useCreateStream,
    useStream,
  } from '@livepeer/react';
  import { useState } from 'react';
  
  export const CreateStream = () => {
    const [streamName, setStreamName] = useState<string>('');
  
    const { mutate: createStream, data: createdStream } = useCreateStream();
    const { data: stream } = useStream({
      streamId: createdStream?.id,
      refetchInterval: 10000,
    });
  
    return (
      <div>
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
            Stream Name
          </label>
          <div className="my-4">
            <input
              type="text"
              name="StreamName"
              id="StreamName"
              className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="MyFirstStream"
              onChange={(e) => setStreamName(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={() =>
            createStream({
              name: streamName,
            })
          }
          disabled={!streamName}
          className="mb-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Stream
        </button>
        {stream && (
          <>
            <div>Stream Key: {stream.streamKey}</div>
            <div>Stream PlaybackId: {stream.playbackId}</div>
          </>
        )}
      </div>
    );
  };
  