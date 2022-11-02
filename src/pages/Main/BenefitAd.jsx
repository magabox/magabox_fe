import React from "react";
import styled from "styled-components";
const BenefitAd = () => {
	return (
		<BenefitAdWrap>
			<Banner>
				<BannerLeft>
					<a href="javacript:void(0)">
						<img
							src="https://img.megabox.co.kr/SharedImg/event/2022/10/24/T5YqXqWTssWD85CKz2eINznOG2gD1jqh.jpg"
							alt="[메가박스X더쎈카드] 더쎈카드 연말정산 이벤트"
						/>
					</a>
				</BannerLeft>
				<BannerRight>
					<a href="javacript:void(0)">
						<img
							src="https://img.megabox.co.kr/SharedImg/event/2022/10/24/aCeSj4Dqi7WmoSmAyVAfgCs2ESjtSLdp.jpg"
							alt="[메가박스X더쎈카드] 더쎈카드 연말정산 이벤트"
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
