import { useCreateStream, useStream } from '@livepeer/react';
 
import { useMemo, useState } from 'react';
 
export const AccessControl = () => {
  const [streamName, setStreamName] = useState<string>('');
  const {
    mutate: createStream,
    data: createdStream,
    status,
  } = useCreateStream();
 
  const { data: stream } = useStream({
    streamId: createdStream?.id,
    refetchInterval: (stream) => (!stream?.isActive ? 5000 : false),
  });
 
  const isLoading = useMemo(() => status === 'loading', [status]);
 
  return (
    <div>
      <h3>Access Control</h3>
      <input onChange={(e) => setStreamName(e.target.value)} />
 
      <button
        onClick={() => {
          if (streamName) {
            createStream({
              name: streamName,
              playbackPolicy: { type: 'jwt' },
            });
          }
        }}
        disabled={!streamName || isLoading || Boolean(stream)}
      >
        Create Gated Stream
      </button>
    </div>
  );
};