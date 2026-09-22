import React from 'react'
import { createRoot } from 'react-dom/client'

import { VideoPreviewHome } from '../components/video-preview-home.jsx'
import { NavBar } from '../layout/nav-bar.jsx'
import { CatagoriesScroller } from '../layout/catagories-scroller.jsx'
import { SideBar } from '../layout/side-bar.jsx'

import '../../styles/general.css'
import '../../styles/animated-icons.css'
import '../../styles/header.css'
import '../../styles/video-layout.css'
import '../../styles/side-bar.css'

function HomePage() {
	return (
		<>
			<NavBar />

			<CatagoriesScroller />

			<div className="blur-filter"></div>

			<SideBar />

			<div className="videos-container">
				{Array.from({length: 6}, (_, index) => (
					<VideoPreviewHome key={index} />
				))}
			</div>	{/* End of videos-container */}

		</>
	)
}

let container = document.getElementById("home-page")
createRoot(container).render(<HomePage />)