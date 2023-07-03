/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayerProfile = /* GraphQL */ `
  query GetPlayerProfile($id: ID!) {
    getPlayerProfile(id: $id) {
      id
      user {
        id
        name
        playerProfile {
          id
          owner
          createdAt
          updatedAt
          playerProfileUserId
          __typename
        }
        hostProfile {
          id
          owner
          createdAt
          updatedAt
          hostProfileUserId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        userPlayerProfileId
        userHostProfileId
        __typename
      }
      gamesPlayed {
        items {
          id
          score
          outcome
          owner
          createdAt
          updatedAt
          playerProfileGamesPlayedId
          gameResultsId
          __typename
        }
        nextToken
        __typename
      }
      hostedGames {
        items {
          id
          name
          description
          players
          isPrivate
          cost
          currency
          owner
          createdAt
          updatedAt
          playerProfileHostedGamesId
          hostProfileHostedGamesId
          gameBoardGameId
          gameTableId
          __typename
        }
        nextToken
        __typename
      }
      receivedHostRatings {
        items {
          id
          rating
          comment
          owner
          createdAt
          updatedAt
          playerProfileReceivedHostRatingsId
          playerProfileGivenHostRatingsId
          hostProfileReceivedPlayerRatingsId
          hostProfileGivenPlayerRatingsId
          __typename
        }
        nextToken
        __typename
      }
      givenHostRatings {
        items {
          id
          rating
          comment
          owner
          createdAt
          updatedAt
          playerProfileReceivedHostRatingsId
          playerProfileGivenHostRatingsId
          hostProfileReceivedPlayerRatingsId
          hostProfileGivenPlayerRatingsId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      playerProfileUserId
      __typename
    }
  }
`;
export const listPlayerProfiles = /* GraphQL */ `
  query ListPlayerProfiles(
    $filter: ModelPlayerProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        gamesPlayed {
          nextToken
          __typename
        }
        hostedGames {
          nextToken
          __typename
        }
        receivedHostRatings {
          nextToken
          __typename
        }
        givenHostRatings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        playerProfileUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHostProfile = /* GraphQL */ `
  query GetHostProfile($id: ID!) {
    getHostProfile(id: $id) {
      id
      user {
        id
        name
        playerProfile {
          id
          owner
          createdAt
          updatedAt
          playerProfileUserId
          __typename
        }
        hostProfile {
          id
          owner
          createdAt
          updatedAt
          hostProfileUserId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        userPlayerProfileId
        userHostProfileId
        __typename
      }
      venues {
        items {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        nextToken
        __typename
      }
      hostedGames {
        items {
          id
          name
          description
          players
          isPrivate
          cost
          currency
          owner
          createdAt
          updatedAt
          playerProfileHostedGamesId
          hostProfileHostedGamesId
          gameBoardGameId
          gameTableId
          __typename
        }
        nextToken
        __typename
      }
      receivedPlayerRatings {
        items {
          id
          rating
          comment
          owner
          createdAt
          updatedAt
          playerProfileReceivedHostRatingsId
          playerProfileGivenHostRatingsId
          hostProfileReceivedPlayerRatingsId
          hostProfileGivenPlayerRatingsId
          __typename
        }
        nextToken
        __typename
      }
      givenPlayerRatings {
        items {
          id
          rating
          comment
          owner
          createdAt
          updatedAt
          playerProfileReceivedHostRatingsId
          playerProfileGivenHostRatingsId
          hostProfileReceivedPlayerRatingsId
          hostProfileGivenPlayerRatingsId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      hostProfileUserId
      __typename
    }
  }
`;
export const listHostProfiles = /* GraphQL */ `
  query ListHostProfiles(
    $filter: ModelHostProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHostProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        hostedGames {
          nextToken
          __typename
        }
        receivedPlayerRatings {
          nextToken
          __typename
        }
        givenPlayerRatings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        hostProfileUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      playerProfile {
        id
        user {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        gamesPlayed {
          nextToken
          __typename
        }
        hostedGames {
          nextToken
          __typename
        }
        receivedHostRatings {
          nextToken
          __typename
        }
        givenHostRatings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        playerProfileUserId
        __typename
      }
      hostProfile {
        id
        user {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        hostedGames {
          nextToken
          __typename
        }
        receivedPlayerRatings {
          nextToken
          __typename
        }
        givenPlayerRatings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        hostProfileUserId
        __typename
      }
      venues {
        items {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          paymentStatus
          paymentReceipt
          owner
          createdAt
          updatedAt
          userBookingsId
          venueBookingsId
          timeslotBookingsId
          tableBookingsId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      userPlayerProfileId
      userHostProfileId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        playerProfile {
          id
          owner
          createdAt
          updatedAt
          playerProfileUserId
          __typename
        }
        hostProfile {
          id
          owner
          createdAt
          updatedAt
          hostProfileUserId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        userPlayerProfileId
        userHostProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        playerProfile {
          id
          owner
          createdAt
          updatedAt
          playerProfileUserId
          __typename
        }
        hostProfile {
          id
          owner
          createdAt
          updatedAt
          hostProfileUserId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        userPlayerProfileId
        userHostProfileId
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getVenue = /* GraphQL */ `
  query GetVenue($id: ID!) {
    getVenue(id: $id) {
      id
      name
      latitude
      longitude
      tables {
        items {
          id
          number
          capacity
          owner
          createdAt
          updatedAt
          venueTablesId
          tableGamesId
          __typename
        }
        nextToken
        __typename
      }
      timeslots {
        items {
          id
          startTime
          endTime
          owner
          createdAt
          updatedAt
          venueTimeslotsId
          __typename
        }
        nextToken
        __typename
      }
      hostingUser {
        id
        name
        playerProfile {
          id
          owner
          createdAt
          updatedAt
          playerProfileUserId
          __typename
        }
        hostProfile {
          id
          owner
          createdAt
          updatedAt
          hostProfileUserId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        userPlayerProfileId
        userHostProfileId
        __typename
      }
      bookings {
        items {
          id
          paymentStatus
          paymentReceipt
          owner
          createdAt
          updatedAt
          userBookingsId
          venueBookingsId
          timeslotBookingsId
          tableBookingsId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      hostProfileVenuesId
      userVenuesId
      __typename
    }
  }
`;
export const listVenues = /* GraphQL */ `
  query ListVenues(
    $filter: ModelVenueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        latitude
        longitude
        tables {
          nextToken
          __typename
        }
        timeslots {
          nextToken
          __typename
        }
        hostingUser {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        hostProfileVenuesId
        userVenuesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchVenues = /* GraphQL */ `
  query SearchVenues(
    $filter: SearchableVenueFilterInput
    $sort: [SearchableVenueSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableVenueAggregationInput]
  ) {
    searchVenues(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        latitude
        longitude
        tables {
          nextToken
          __typename
        }
        timeslots {
          nextToken
          __typename
        }
        hostingUser {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        hostProfileVenuesId
        userVenuesId
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getTimeslot = /* GraphQL */ `
  query GetTimeslot($id: ID!) {
    getTimeslot(id: $id) {
      id
      startTime
      endTime
      venue {
        id
        name
        latitude
        longitude
        tables {
          nextToken
          __typename
        }
        timeslots {
          nextToken
          __typename
        }
        hostingUser {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        hostProfileVenuesId
        userVenuesId
        __typename
      }
      bookings {
        items {
          id
          paymentStatus
          paymentReceipt
          owner
          createdAt
          updatedAt
          userBookingsId
          venueBookingsId
          timeslotBookingsId
          tableBookingsId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      venueTimeslotsId
      __typename
    }
  }
`;
export const listTimeslots = /* GraphQL */ `
  query ListTimeslots(
    $filter: ModelTimeslotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeslots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startTime
        endTime
        venue {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        venueTimeslotsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchTimeslots = /* GraphQL */ `
  query SearchTimeslots(
    $filter: SearchableTimeslotFilterInput
    $sort: [SearchableTimeslotSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableTimeslotAggregationInput]
  ) {
    searchTimeslots(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        startTime
        endTime
        venue {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        venueTimeslotsId
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getTable = /* GraphQL */ `
  query GetTable($id: ID!) {
    getTable(id: $id) {
      id
      number
      capacity
      games {
        id
        name
        description
        boardGame {
          id
          bgaId
          name
          description
          minPlayers
          maxPlayers
          minPlaytime
          maxPlaytime
          category
          imageUrl
          createdAt
          updatedAt
          __typename
        }
        players
        table {
          id
          number
          capacity
          owner
          createdAt
          updatedAt
          venueTablesId
          tableGamesId
          __typename
        }
        isPrivate
        cost
        currency
        results {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        playerProfileHostedGamesId
        hostProfileHostedGamesId
        gameBoardGameId
        gameTableId
        __typename
      }
      venue {
        id
        name
        latitude
        longitude
        tables {
          nextToken
          __typename
        }
        timeslots {
          nextToken
          __typename
        }
        hostingUser {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        hostProfileVenuesId
        userVenuesId
        __typename
      }
      bookings {
        items {
          id
          paymentStatus
          paymentReceipt
          owner
          createdAt
          updatedAt
          userBookingsId
          venueBookingsId
          timeslotBookingsId
          tableBookingsId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      venueTablesId
      tableGamesId
      __typename
    }
  }
`;
export const listTables = /* GraphQL */ `
  query ListTables(
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        capacity
        games {
          id
          name
          description
          players
          isPrivate
          cost
          currency
          owner
          createdAt
          updatedAt
          playerProfileHostedGamesId
          hostProfileHostedGamesId
          gameBoardGameId
          gameTableId
          __typename
        }
        venue {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        venueTablesId
        tableGamesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBoardGame = /* GraphQL */ `
  query GetBoardGame($id: ID!) {
    getBoardGame(id: $id) {
      id
      bgaId
      name
      description
      minPlayers
      maxPlayers
      minPlaytime
      maxPlaytime
      category
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBoardGames = /* GraphQL */ `
  query ListBoardGames(
    $filter: ModelBoardGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bgaId
        name
        description
        minPlayers
        maxPlayers
        minPlaytime
        maxPlaytime
        category
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const boardGamesByBgaId = /* GraphQL */ `
  query BoardGamesByBgaId(
    $bgaId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBoardGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    boardGamesByBgaId(
      bgaId: $bgaId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bgaId
        name
        description
        minPlayers
        maxPlayers
        minPlaytime
        maxPlaytime
        category
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchBoardGames = /* GraphQL */ `
  query SearchBoardGames(
    $filter: SearchableBoardGameFilterInput
    $sort: [SearchableBoardGameSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBoardGameAggregationInput]
  ) {
    searchBoardGames(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        bgaId
        name
        description
        minPlayers
        maxPlayers
        minPlaytime
        maxPlaytime
        category
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      name
      description
      boardGame {
        id
        bgaId
        name
        description
        minPlayers
        maxPlayers
        minPlaytime
        maxPlaytime
        category
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      players
      table {
        id
        number
        capacity
        games {
          id
          name
          description
          players
          isPrivate
          cost
          currency
          owner
          createdAt
          updatedAt
          playerProfileHostedGamesId
          hostProfileHostedGamesId
          gameBoardGameId
          gameTableId
          __typename
        }
        venue {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        venueTablesId
        tableGamesId
        __typename
      }
      isPrivate
      cost
      currency
      results {
        items {
          id
          score
          outcome
          owner
          createdAt
          updatedAt
          playerProfileGamesPlayedId
          gameResultsId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      playerProfileHostedGamesId
      hostProfileHostedGamesId
      gameBoardGameId
      gameTableId
      __typename
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        boardGame {
          id
          bgaId
          name
          description
          minPlayers
          maxPlayers
          minPlaytime
          maxPlaytime
          category
          imageUrl
          createdAt
          updatedAt
          __typename
        }
        players
        table {
          id
          number
          capacity
          owner
          createdAt
          updatedAt
          venueTablesId
          tableGamesId
          __typename
        }
        isPrivate
        cost
        currency
        results {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        playerProfileHostedGamesId
        hostProfileHostedGamesId
        gameBoardGameId
        gameTableId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGameResult = /* GraphQL */ `
  query GetGameResult($id: ID!) {
    getGameResult(id: $id) {
      id
      playerProfile {
        id
        user {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        gamesPlayed {
          nextToken
          __typename
        }
        hostedGames {
          nextToken
          __typename
        }
        receivedHostRatings {
          nextToken
          __typename
        }
        givenHostRatings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        playerProfileUserId
        __typename
      }
      game {
        id
        name
        description
        boardGame {
          id
          bgaId
          name
          description
          minPlayers
          maxPlayers
          minPlaytime
          maxPlaytime
          category
          imageUrl
          createdAt
          updatedAt
          __typename
        }
        players
        table {
          id
          number
          capacity
          owner
          createdAt
          updatedAt
          venueTablesId
          tableGamesId
          __typename
        }
        isPrivate
        cost
        currency
        results {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        playerProfileHostedGamesId
        hostProfileHostedGamesId
        gameBoardGameId
        gameTableId
        __typename
      }
      score
      outcome
      owner
      createdAt
      updatedAt
      playerProfileGamesPlayedId
      gameResultsId
      __typename
    }
  }
`;
export const listGameResults = /* GraphQL */ `
  query ListGameResults(
    $filter: ModelGameResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerProfile {
          id
          owner
          createdAt
          updatedAt
          playerProfileUserId
          __typename
        }
        game {
          id
          name
          description
          players
          isPrivate
          cost
          currency
          owner
          createdAt
          updatedAt
          playerProfileHostedGamesId
          hostProfileHostedGamesId
          gameBoardGameId
          gameTableId
          __typename
        }
        score
        outcome
        owner
        createdAt
        updatedAt
        playerProfileGamesPlayedId
        gameResultsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      id
      playerProfile {
        id
        user {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        gamesPlayed {
          nextToken
          __typename
        }
        hostedGames {
          nextToken
          __typename
        }
        receivedHostRatings {
          nextToken
          __typename
        }
        givenHostRatings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        playerProfileUserId
        __typename
      }
      hostProfile {
        id
        user {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        hostedGames {
          nextToken
          __typename
        }
        receivedPlayerRatings {
          nextToken
          __typename
        }
        givenPlayerRatings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        hostProfileUserId
        __typename
      }
      rating
      comment
      owner
      createdAt
      updatedAt
      playerProfileReceivedHostRatingsId
      playerProfileGivenHostRatingsId
      hostProfileReceivedPlayerRatingsId
      hostProfileGivenPlayerRatingsId
      __typename
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerProfile {
          id
          owner
          createdAt
          updatedAt
          playerProfileUserId
          __typename
        }
        hostProfile {
          id
          owner
          createdAt
          updatedAt
          hostProfileUserId
          __typename
        }
        rating
        comment
        owner
        createdAt
        updatedAt
        playerProfileReceivedHostRatingsId
        playerProfileGivenHostRatingsId
        hostProfileReceivedPlayerRatingsId
        hostProfileGivenPlayerRatingsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      user {
        id
        name
        playerProfile {
          id
          owner
          createdAt
          updatedAt
          playerProfileUserId
          __typename
        }
        hostProfile {
          id
          owner
          createdAt
          updatedAt
          hostProfileUserId
          __typename
        }
        venues {
          nextToken
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        userPlayerProfileId
        userHostProfileId
        __typename
      }
      venue {
        id
        name
        latitude
        longitude
        tables {
          nextToken
          __typename
        }
        timeslots {
          nextToken
          __typename
        }
        hostingUser {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        hostProfileVenuesId
        userVenuesId
        __typename
      }
      table {
        id
        number
        capacity
        games {
          id
          name
          description
          players
          isPrivate
          cost
          currency
          owner
          createdAt
          updatedAt
          playerProfileHostedGamesId
          hostProfileHostedGamesId
          gameBoardGameId
          gameTableId
          __typename
        }
        venue {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        venueTablesId
        tableGamesId
        __typename
      }
      timeslot {
        id
        startTime
        endTime
        venue {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        bookings {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        venueTimeslotsId
        __typename
      }
      paymentStatus
      paymentReceipt
      owner
      createdAt
      updatedAt
      userBookingsId
      venueBookingsId
      timeslotBookingsId
      tableBookingsId
      __typename
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          owner
          createdAt
          updatedAt
          userPlayerProfileId
          userHostProfileId
          __typename
        }
        venue {
          id
          name
          latitude
          longitude
          owner
          createdAt
          updatedAt
          hostProfileVenuesId
          userVenuesId
          __typename
        }
        table {
          id
          number
          capacity
          owner
          createdAt
          updatedAt
          venueTablesId
          tableGamesId
          __typename
        }
        timeslot {
          id
          startTime
          endTime
          owner
          createdAt
          updatedAt
          venueTimeslotsId
          __typename
        }
        paymentStatus
        paymentReceipt
        owner
        createdAt
        updatedAt
        userBookingsId
        venueBookingsId
        timeslotBookingsId
        tableBookingsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
