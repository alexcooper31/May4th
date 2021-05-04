import { ReactElement } from 'react';

import { DataPrompt, DataInfo } from '../styles';

interface Props {
  prompt: string;
  info: string;
}

export default function CastInfo({ prompt, info }: Props): ReactElement {
  return (
    <div style={{ width: '30%' }}>
      <DataPrompt> { prompt } </DataPrompt>
      <DataInfo> { info } </DataInfo>
    </div>
  );
}
