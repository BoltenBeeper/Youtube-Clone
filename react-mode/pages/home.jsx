import React from 'react'
import { createRoot } from 'react-dom/client'

import { VideoPreviewHome } from '../components/ui/video-preview-home.jsx'
import { NavBar } from '../components/layout/nav-bar.jsx'
import { CatagoriesTop } from '../components/ui/catagories-top.jsx'
import { SideBar } from '../components/layout/side-bar.jsx'

import '../../styles/general.css'
import '../../styles/animated_icons.css'
import '../../styles/header.css'
import '../../styles/video_layout.css'
import '../../styles/side_bar.css'

function HomePage() {
	return (
		<>
			<NavBar></NavBar>

			<CatagoriesTop></CatagoriesTop>

			<div className="blur-filter"></div>

			<SideBar></SideBar>

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