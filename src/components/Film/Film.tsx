// Copyright rigélblu inc.
// All rights reserved.
import Scene from '@/components/Scene/Scene';
import Storyboard from './Storyboard/Storyboard';

export default function Film() {
  return (
    <div className='flex mgn-debug-outline-green'>
      <Scene />
      <Storyboard />
    </div>
  );
}
