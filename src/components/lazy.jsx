import { Suspense } from 'react';
// const VehicleSec = lazy(() => import('./VehicleSec'));
import Map from '../assets/map.jpg';

const Lazy = () => {
   return (
      <div className="App">
         <h1 className='mb-5 text-sm text-red-500 font-semibold'>Data 1 - 20</h1>
         <div className='flex grid-col-3 gap-4 mb-5'>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
        </div>
         <Suspense fallback={<div>Loading...</div>}>
            <h1 className='mb-5 text-sm text-red-500 font-semibold'>Data 21 - 40</h1>
            <div className='flex grid-col-3 gap-4 mb-5'>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
                <div><img src={Map} alt='' /></div>
            </div>
         </Suspense>
      </div>
   );
};
export default Lazy;