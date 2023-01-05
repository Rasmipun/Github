import { useReducer } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const StyledContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`
const StyledImageContainer = styled.div`
    width: 100px;
    height: 100px;
`
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`
const StyledInfoContainer = styled.div`
    grid-column: 2/5;
    & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const StyledGrayText = styled.p`
  color: hsl(217, 35%, 45%);
`

const StyledStasConatiner = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
background: var(--very-dark-blue);
padding: 15px;
border-radius: 10px;
`
const StyledValue = styled.p`
font-size: 1.5rem;
font-weight: 700;
`
const StyledUserInfoContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
margin-top: 20px;

& > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`
const Details = ({user}) =>{
    return (<StyledContainer>
            <StyledImageContainer>
                <StyledImage src={user.avatar_url}></StyledImage>
            </StyledImageContainer>
            <StyledInfoContainer>
                <div>
                    <div>
                        <h2 className="name">{user.name}</h2>
                        <p className="username">{user.username}</p>
                    </div>
                    <p className="joined-date" >{new Date(user.created_at).toDateString()}</p>
                </div>
            
            <StyledGrayText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque
            fuga voluptas voluptate vero repellat!
            </StyledGrayText>
            
            <StyledStasConatiner>
            <div>
              <p class="stats-title">repos</p>
              <StyledValue class="stats-value stats-repos">{user.public_repos}</StyledValue>
            </div>
            <div>
              <p class="stats-title">followers</p>
              <StyledValue class="stats-value stats-followers">{user.public_followers}</StyledValue>
            </div>
            <div>
              <p class="stats-title">following</p>
              <StyledValue class="stats-value stats-following">{user.public_following}</StyledValue>
            </div>
            </StyledStasConatiner>
            <StyledUserInfoContainer>
            <div>
              <svg class="icon icon-location" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 10q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"
                />
              </svg>
              <span class="user-location">{user.location}</span>
            </div>
            <div>
              <svg class="icon icon-twitter" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                />
              </svg>
              <span class="user-twitter">{user.twitter}</span>
            </div>
            <div>
              <svg class="icon icon-link" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5"
                  />
                  <path
                    d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5"
                  />
                </g>
              </svg>
              <span class="user-blog">https://github.com</span>
            </div>
            <div>
              <svg class="icon icon-company" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Z"
                />
              </svg>
              <span class="user-company">{user.company || 'N/A'}</span>
            </div>
            </StyledUserInfoContainer>
            </StyledInfoContainer>
        </StyledContainer> )
}

export const LoadingDetail = ()=>{
  return(<StyledContainer>
    <StyledImageContainer>
        <StyledImage src="user.avatar_url">
          
        </StyledImage>

    </StyledImageContainer>
    <StyledInfoContainer>
        <div>
            <div>
                <h2 className="name">
                  <Skeleton height="20px" width="200px"></Skeleton></h2>
                <p className="username"><Skeleton/></p>
            </div>
            <p className="joined-date" ><Skeleton/>
            <Skeleton height="20px" width="200px"></Skeleton>
            </p>
        </div>
    
    <StyledGrayText>
    <Skeleton count={3}/>
    </StyledGrayText>
    
    {/* <StyledStasConatiner>
    <div>
      <p class="stats-title">{user.repo}</p>
      <StyledValue class="stats-value stats-repo">12</StyledValue>
    </div>
    <div>
      <p class="stats-title">{user.follwers}</p>
      <StyledValue class="stats-value stats-followers">12</StyledValue>
    </div>
    <div>
      <p class="stats-title">{user.following}</p>
      <StyledValue class="stats-value stats-following">12</StyledValue>
    </div>
    </StyledStasConatiner> */}
    {/* <StyledUserInfoContainer>
    <div>
      <svg class="icon icon-location" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 10q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"
        />
      </svg>
      <span class="user-location">{user.location}</span>
    </div>
    <div>
      <svg class="icon icon-twitter" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
        />
      </svg>
      <span class="user-twitter">{user.twitter}</span>
    </div>
    <div>
      <svg class="icon icon-link" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5"
          />
          <path
            d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5"
          />
        </g>
      </svg>
      <span class="user-blog">https://github.com</span>
    </div>
    <div>
      <svg class="icon icon-company" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Z"
        />
      </svg>
      <span class="user-company">{user.company || 'N/A'}</span>
    </div>
    </StyledUserInfoContainer> */}
    </StyledInfoContainer>
</StyledContainer> )
}

export default Details;