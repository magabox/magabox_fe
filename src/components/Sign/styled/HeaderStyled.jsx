import styled from "styled-components";



export const StLogo = styled.img`
	position:absolute;
	top:23px;
	width:140px;
	height: 47px;
	left : 480px;
`;

export const StMy = styled.img`
	src : ${(props)=> props.src};
	width:18px;
	height: 20px;
	margin-left : 150px;

`;

export const StCal = styled.img`
	src : ${(props)=> props.src};
    line-break: inherit;
    position: absolute;
    right: 3.8%;
    top: 5px;
    width: 35px;
    height: 35px;

`;

export const StBenefit = styled.img`
	src : ${(props)=> props.src};
	width:30px;
	height: 18px;
	margin-left : 60px;
    &:hover{
        text-decoration:none; border-bottom:3px solid white; padding-bottom:17px;
    }
`;

export const StStore = styled.img`
	src : ${(props)=> props.src};
	width:45px;
	height: 18px;
	margin-left : 60px;

`;

export const StEvent = styled.img`
	src : ${(props)=> props.src};
	width:45px;
	height: 18px;
    &:hover{
        text-decoration:none; border-bottom:3px solid white; padding-bottom:17px;
    }
`;

export const StTheater = styled.img`
	src : ${(props)=> props.src};
	margin-left: 60px;
	color:white;
	width:32px;
	height: 18px;
    &:hover{
        text-decoration:none; border-bottom:3px solid white; padding-bottom:17px;
    }
`;

export const StReserv = styled.img`
	src : ${(props)=> props.src};
	margin-left: 60px;
	color:white;
	width:30px;
	height: 18px;
    &:hover{
        text-decoration:none; border-bottom:3px solid white; padding-bottom:17px;
    }
`;

export const StMovie = styled.img`
	src : ${(props)=> props.src};
	margin-left : 95px;
	color:white;
	width:30px;
	height: 18px;
    position: relative;
    &:hover{
        text-decoration:none; border-bottom:3px solid white; padding-bottom:17px;
    }

`;

export const StSearch = styled.img`
	src : ${(props)=> props.src};
	margin-left : 20px;
	color:white;
	width:18px;
	height: 18px;
`;

export const StBars = styled.img`
 	src : ${(props)=> props.src};
	 color:white;
	 width:23px;
	 height: 18px;

`;

export const StDownLeftBox = styled.div`
	display : flex;
	width:50%;
	margin-top: 12px;
	margin-left : 7px;
	& img{
		cursor:pointer;
	}
`;

export const StDownRightBox = styled.div`
	display : flex;
	width:50%;
	margin-left : 308px;
    margin-top : 12px;

	& img{
		cursor:pointer;
	}
`;

export const StHeaderContentBox = styled.div`
	width : 1100px;
	height : 841.4px;
	margin : 0 auto;
	position : relative;
`;

export const StUpLeftBox = styled.div`
	display: flex;
	gap : 20px;
	font-size: 13px;

    & span{
        color : #888;
    }
	
`;

export const StUpRightBox = styled.div`
	display: flex;
	gap : 20px;
	font-size: 13px;

    & span{
        color : #888;
    }
	
`;

export const StUpBox = styled.div`
	color:white;
	width: 100%;
	height: 20px;
	margin-top : 20px;
	display: flex;
	justify-content: space-between;
	position:relative;
`;

export const StDownBox = styled.div`
	color:white;
	width:100%;
	height : 50px;
	line-height: 70px;
	display:flex;
	justify-content: space-between;
	position:relative;
`;

export const StHeaderBox = styled.div`
	width: 100%;
	height : 91px;
	background-color: #000000ff;
	position : fixed;
	top : 0;
	z-index  : 15;
	border-bottom: 1px solid rgba(255,255,255,.2);
	display:flex;
	flex-direction: column;
	& span{
		cursor : pointer;
	}
`;


