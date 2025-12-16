import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

	gsap.registerPlugin(ScrollTrigger)

	const imageDivRef = useRef(null)
	const imageRef = useRef(null)

	const imageArray = [
		'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
		'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
	]



	useGSAP(function () {
		gsap.to(imageDivRef.current, {
			scrollTrigger: {
				trigger: imageDivRef.current,
				markers:true,
				start: 'top 35%',
				end: 'top -75%',
				pin: true,
				pinSpacing: true,
				pinReparent: true,
				pinType: 'transform',
				scrub:1,
				anticipatePin:1,
				invalidateOnRefresh: true,
				onUpdate: function (elem) {
					let imageIndex;
					if (elem.progress < 1) {
						imageIndex = Math.floor(elem.progress * imageArray.length)
					}
					else {
						imageIndex = imageArray.length - 1
					}
					imageRef.current.src = imageArray[imageIndex]
				}
			}
		})
	})

	return (
		<div className='parent'>
			<div id='page1' className='py-1 '>
				<div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-60 left-[30vw]  '>
					<img ref={imageRef}
						src="/model.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>

				<div className='relative'>
					<div className='mt-[55vh]'>
						<h1 className='text-[19vw] text-center uppercase leading-[17vw]'>
							Refined <br /> Core
						</h1>
					</div>

					<div className='pl-[40%] mt-20'>
						<p className='text-6xl'>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							Our work is guided by intention, where form and movement are carefully considered.
							Each piece is shaped with restraint, allowing simplicity to carry presence.
							Free from seasonal urgency, the designs focus on longevity — expressing identity
							through clarity rather than excess.
						</p>
					</div>
				</div>
			</div>

			<div id='page2' className='h-screen'>
			</div>
		</div>
	)
}

export default Agence
