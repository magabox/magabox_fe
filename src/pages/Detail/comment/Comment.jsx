import React from 'react'
import { StProfile} from '../ContentData'
import { StId } from '../ContentData'
import Flex from '../../../elem/Flex/Flex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const user = localStorage.getItem("user-name")

const Comment = ({comment}) => {
  return (
    <>			
	
					<Flex dir="row">
						<StProfile style={{ marginTop: "30px" }}>
						<img src="https://img.megabox.co.kr/static/pc/images/mypage/bg-profile.png" />
						<StId>{user?.replace(/.{2}$/, "**")}</StId>
						</StProfile>
						<Flex
							wd="100%"
							dir="row"
							bg="#f8f8fa;"
							mg="30px 0 0 0"
							brd="0 10px 10px 10px"
						>
							<Flex ht="84" dir="row" wd="995">
								<Flex wd="290" dir="row" ai="center" jc="center" gap="55">
									<Flex>
										<span
											style={{
												color: "#503396",
												marginLeft: "20px",
												paddinnLeft: "10px",
												width: "45px"
											}}
										>
											관람평
										</span>
									</Flex>
									<Flex>
										<span style={{ fontSize: "2.4em", color: "#503396" }}>
											{comment.rating}
										</span>
									</Flex>
									<Flex br="1px solid #c5c2c2ba" pd="20">
										<span style={{ color: "#503396",width:"30px" }}>배우</span>
									</Flex>
								</Flex>
								<Flex dir="row" wd="715px" jc="space-between" ai="center" mg="0 0 0 25px">
									<span>{comment.content}</span>
									<Flex gap="15" dir="row">
										<FontAwesomeIcon
											icon={faThumbsUp}
											size="lg"
											style={{ cursor: "pointer" }}
										/>
										<FontAwesomeIcon
											icon={faEllipsisVertical}
											size="lg"
											style={{ marginRight: "20px", cursor: "pointer" }}
										/>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						</Flex>
    
    </>
  )
}

export default Comment