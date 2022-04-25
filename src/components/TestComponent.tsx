import React from "react";
import styled from "styled-components";
import {usePosts} from "../hooks/usePosts";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  color: white;
`

const TestComponent = () => {
    const {data: posts, status, error} = usePosts()
    console.log('data:', posts)
    console.log('status:', status)
    return (
        <>
            <Container>hi</Container>
            {
                posts?.data.map(item => (
                    <div>
                        <h3>{item.id}</h3>
                        <h3>{item.title}</h3>
                    </div>
                ))
            }
        </>
    )
}
export default TestComponent