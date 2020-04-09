import {createHttpLink} from "apollo-link-http";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import gql from "graphql-tag";
import {graphqlApiEndPoint} from "./constants";


const httpLink = createHttpLink({
    uri: graphqlApiEndPoint
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


export const getAllSteps = (key) => {
    return client.query({
        query: gql`
            {
                step(where: {key: {_eq:  "${key}"}}) {
                    key
                    message
                    c
                    r
                    step_no
                    timestamp
                    xo
                }
            }
        `
    })
    .then(res => {
        console.log(res)
        return res.data.step
    })
}

export const insertStep = (key, message, c,r, xo, step_no) => {
    return client.query({
        query: gql`
            {
                insert_step(objects: {
                    key: "${key}",
                    message: "${message}",
                    c: "${c}",
                    r: "${r}",
                    step_no: "${step_no}",
                    xo: "${xo}"
                }) {
                    affected_rows
                }
            }
        `
    })
}

export const getAllLogs = (key) => {
    return client.query({
        query: gql`
            {
                step(where: {key: {_eq: "${key}"}}) {
                    message
                    timestamp
                }
            }
        `
    })
    .then(res => {
        console.log(res)
        return res.data.step
    })
}