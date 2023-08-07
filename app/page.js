'use client';

import { gsap } from 'gsap';
import styles from './page.module.css';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const transition = { duration: 1.6, ease: [0.6, 0.08, 0.12, 1] };
const transition2 = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const titleItem = {
	initial: {
		y: 0,
	},
	animate: {
		y: 0,
		transition: {
			staggerChildren: 0.04,
			staggerDirection: 1,
		},
	},
};

const letter = {
	initial: {
		y: '100%',
	},
	animate: {
		y: 0,
		transition: transition2,
	},
};

export default function Home() {
	const mItemFirst = useRef(null);
	const mItemSecond = useRef(null);
	const slider = useRef(null);
	const main = useRef();
	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger);
			gsap.to(slider.current, {
				scrollTrigger: {
					trigger: document.documentElement,
					scrub: 3,
					start: 0,
					end: window.innerHeight,
					onUpdate: (e) => {
						direction = e.direction * -1;
					},
				},
				x: '-500px',
			});
			requestAnimationFrame(animate);
		}, main.current);

		return () => ctx.revert();
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(mItemFirst.current, { xPercent: xPercent });
		gsap.set(mItemSecond.current, { xPercent: xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.16 * direction;
	};

	return (
		<motion.main className={styles.main} ref={main} initial='initial' animate='animate' exit='exit'>
			<h1 className={styles.title}>
				<div className={styles.titleItem}>
					<motion.div className={styles.titleItemInner} variants={titleItem}>
						<motion.span variants={letter}>n</motion.span>
						<motion.span variants={letter}>i</motion.span>
						<motion.span variants={letter}>s</motion.span>
						<motion.span variants={letter}>h</motion.span>
						<motion.span variants={letter}>i</motion.span>
						<motion.span variants={letter}>t</motion.span>
					</motion.div>
				</div>
				<div className={styles.titleItem}>
					<motion.div className={styles.titleItemInner} variants={titleItem}>
						<motion.span variants={letter}>s</motion.span>
						<motion.span variants={letter}>a</motion.span>
						<motion.span variants={letter}>r</motion.span>
						<motion.span variants={letter}>v</motion.span>
						<motion.span variants={letter}>a</motion.span>
						<motion.span variants={letter}>i</motion.span>
						<motion.span variants={letter}>y</motion.span>
						<motion.span variants={letter}>a</motion.span>
					</motion.div>
				</div>
				<div className={styles.titleItem}>
					<motion.div className={styles.titleItemInner} variants={titleItem} ref={slider}>
						<span ref={mItemFirst}>
							<motion.span variants={letter}>c</motion.span>
							<motion.span variants={letter}>r</motion.span>
							<motion.span variants={letter}>e</motion.span>
							<motion.span variants={letter}>a</motion.span>
							<motion.span variants={letter}>t</motion.span>
							<motion.span variants={letter}>i</motion.span>
							<motion.span variants={letter}>v</motion.span>
							<motion.span variants={letter}>e</motion.span>
							<span>&nbsp;</span>
							<motion.span variants={letter}>-</motion.span>
							<span>&nbsp;</span>
							<motion.span variants={letter}>f</motion.span>
							<motion.span variants={letter}>r</motion.span>
							<motion.span variants={letter}>o</motion.span>
							<motion.span variants={letter}>n</motion.span>
							<motion.span variants={letter}>t</motion.span>
							<motion.span variants={letter}>e</motion.span>
							<motion.span variants={letter}>n</motion.span>
							<motion.span variants={letter}>d</motion.span>
							<span>&nbsp;</span>
							<motion.span variants={letter}>-</motion.span>
							<span>&nbsp;</span>
						</span>
						<span ref={mItemSecond}>
							<motion.span variants={letter}>c</motion.span>
							<motion.span variants={letter}>r</motion.span>
							<motion.span variants={letter}>e</motion.span>
							<motion.span variants={letter}>a</motion.span>
							<motion.span variants={letter}>t</motion.span>
							<motion.span variants={letter}>i</motion.span>
							<motion.span variants={letter}>v</motion.span>
							<motion.span variants={letter}>e</motion.span>
							<span>&nbsp;</span>
							<motion.span variants={letter}>-</motion.span>
							<span>&nbsp;</span>
							<motion.span variants={letter}>f</motion.span>
							<motion.span variants={letter}>r</motion.span>
							<motion.span variants={letter}>o</motion.span>
							<motion.span variants={letter}>n</motion.span>
							<motion.span variants={letter}>t</motion.span>
							<motion.span variants={letter}>e</motion.span>
							<motion.span variants={letter}>n</motion.span>
							<motion.span variants={letter}>d</motion.span>
							<span>&nbsp;</span>
							<motion.span variants={letter}>-</motion.span>
							<span>&nbsp;</span>
						</span>
					</motion.div>
				</div>
				<div className={styles.titleItem}>
					<motion.div className={styles.titleItemInner} variants={titleItem}>
						<motion.span variants={letter}>d</motion.span>
						<motion.span variants={letter}>e</motion.span>
						<motion.span variants={letter}>v</motion.span>
						<motion.span variants={letter}>e</motion.span>
						<motion.span variants={letter}>l</motion.span>
						<motion.span variants={letter}>o</motion.span>
						<motion.span variants={letter}>p</motion.span>
						<motion.span variants={letter}>e</motion.span>
						<motion.span variants={letter}>r</motion.span>
					</motion.div>
				</div>
			</h1>
			<div className='container-small'>
				<div className={styles.content}>
					<p>
						Marquee text refers to a scrolling text effect often used on websites to display messages, announcements, or
						promotional content. This effect involves text moving horizontally (left or right) across a designated area of a
						webpage. Originally popular in the early days of the web, marquee text has become less common due to design trends
						favoring cleaner and more user-friendly interfaces. While marquee text can add a dynamic element to a website, its
						impact on user experience is mixed.
					</p>
					<p>
						On one hand, marquee text can draw attention to important information and help convey a sense of urgency or
						importance. It&apos;s especially useful for displaying time-sensitive announcements or highlighting limited-time
						offers. However, the user experience can be negatively affected by marquee text if not implemented carefully.
						Rapidly scrolling text can be distracting, making it difficult for users to focus on other content on the page.
						Additionally, continuous motion can create accessibility challenges, as it might be hard to read for individuals
						with visual impairments or those who struggle with motion sensitivity. As a result, designers should consider the
						context, content, and user preferences when deciding to use marquee text, striving to strike a balance between its
						attention-grabbing nature and its potential impact on overall usability.
					</p>
				</div>
			</div>
		</motion.main>
	);
}
