import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../ImageReveal.css";

function ImageReveal() {
  const numSlices1 = 100;
  const splitRef1 = useRef(null);
  const scannerRef = useRef(null);
  const [sliceHeight1, setSliceHeight1] = useState(0);

//  useEffect(() => {
//   const scanner = scannerRef.current;
//   const spans = splitRef1.current.querySelectorAll('span');
//   const total = spans.length;

//   const resizeObserver = new ResizeObserver(() => {
//     const height = splitRef1.current.offsetHeight;
//     setSliceHeight1(height / numSlices1);
//   });

//   if (splitRef1.current) {
//     resizeObserver.observe(splitRef1.current);
//   }

//   const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

//   // Fade out each span one-by-one with scanline movement
//   for (let i = 0; i < total; i++) {
//     const progress = (i / (total - 1)) * 100;

//     tl.to(scanner, {
//       y: `${(progress / 100) * splitRef1.current.offsetHeight}px`,
//       duration: 0,
//     });

//     tl.to(spans[i], {
//       opacity: 0,
//       duration: 0.05,
//       ease: 'none',
//     });
//   }

//   // Pause before fading back in
//   tl.to({}, { duration: 2 });

//   // Fade in each span one-by-one again with scanline
//  for (let i = total - 1; i >= 0; i--) {
//   const progress = (i / (total - 1)) * 100;

//   tl.to(scanner, {
//     y: `${(progress / 100) * splitRef1.current.offsetHeight}px`,
//     duration: 0,
//   });

//   tl.to(spans[i], {
//     opacity: 1,
//     duration: 0.05,
//     ease: 'none',
//   });
// }


//   return () => {
//     resizeObserver.disconnect();
//     tl.kill();
//   };
// }, []);

useEffect(() => {
  const resizeObserver = new ResizeObserver(() => {
    const height = splitRef1.current?.offsetHeight || 640;
    setSliceHeight1(height / numSlices1);
  });

  if (splitRef1.current) {
    resizeObserver.observe(splitRef1.current);
  }

  return () => resizeObserver.disconnect();
}, []);


useEffect(() => {
  if (!sliceHeight1) return;

  const scanner = scannerRef.current;
  const spans = splitRef1.current.querySelectorAll('span');
  const total = spans.length;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  // Top to bottom — fade out
  for (let i = 0; i < total; i++) {
    const y = i * sliceHeight1;

    tl.to(scanner, {
      y: y,
      duration: 0,
    });

    tl.to(spans[i], {
      opacity: 0,
      duration: 0.05,
      ease: 'none',
    });
  }

  // Pause
  tl.to({}, { duration: 2 });

  // Bottom to top — fade in
  for (let i = total - 1; i >= 0; i--) {
    const y = i * sliceHeight1;

    tl.to(scanner, {
      y: y,
      duration: 0,
    });

    tl.to(spans[i], {
      opacity: 1,
      duration: 0.05,
      ease: 'none',
    });
  }

  return () => {
    tl.kill(); // important: destroy previous timeline on re-run
  };
}, [sliceHeight1]);


  return (
    <div className="wrapper1">
      <div className="split1" ref={splitRef1}>
        {Array.from({ length: numSlices1 }, (_, i) => (
          <span
            key={i}
            style={{
              backgroundPosition: `0 -${i * sliceHeight1}px`,
            }}
          />
        ))}
      </div>

      <div className="scanner-line1 vertical1" ref={scannerRef}></div>
    </div>
  );
}

export default ImageReveal;
