import React from "react";
import styled from "styled-components";
const BenefitAd = () => {
	return (
		<BenefitAdWrap>
			<Banner>
				<BannerLeft>
					<a href="javacript:void(0)">
						<img
							src="https://img.megabox.co.kr/SharedImg/event/2022/11/01/AXU0jbiLo1AFnu8WheuWxrLkfSUdWtwq.jpg"
							alt="<블랙 팬서: 와칸다 포에버> 얼리버드 스페셜 예매 이벤트"
						/>
					</a>
				</BannerLeft>
				<BannerRight>
					<a href="javacript:void(0)">
						<img
							src="https://img.megabox.co.kr/SharedImg/event/2022/05/31/4pLdCNd6S9Vl2JGPW4Q68KSPJ28axiUc.jpg"
							alt="[대한항공X메가박스] SKYPASS 회원 할인 프로모션"
						/>
					</a>
				</BannerRight>
			</Banner>
			<AdImg>
				<a href="javascript:void(0)">
					<img
						src="https://mlink-cdn.netinsight.co.kr/2022/08/19/1f06aa649b4900db095844b0ed81264d.jpg"
						alt="광주은행 PC일반배너 2208"
					/>
				</a>
			</AdImg>
		</BenefitAdWrap>
	);
};

export default BenefitAd;

export const BenefitAdWrap = styled.div`
	position: relative;
	min-width: 1100px;
	height: 204px;
`;

export const Banner = styled.div`
	display: flex;
`;

export const BannerLeft = styled.div`
	width: 441px;
	height: 204px;
	font-size: 0;
	line-height: 0;
	border-radius: 5px;
	box-shadow: 10px 10px 10px 0px rgb(0 0 0 / 20%);
	img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
`;
export const BannerRight = styled.div`
	margin-left: 20px;
	display: block;
	width: 204px;
	height: 204px;
	border-radius: 5px;
	box-shadow: 10px 10px 10px 0px rgb(0 0 0 / 20%);
	img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
`;

export const AdImg = styled.div`
	overflow: hidden;
	position: absolute;
	right: 0;
	bottom: 0;
	width: 415px;
	height: 530px;
	font-size: 0;
	line-height: 0;
	border-radius: 5px;
	img {
		width: 415px;
		height: 530px;
		display: block;
	}
`;
