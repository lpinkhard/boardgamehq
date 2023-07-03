/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayerProfile = /* GraphQL */ `
  mutation CreatePlayerProfile(
    $input: CreatePlayerProfileInput!
    $condition: ModelPlayerProfileConditionInput
  ) {
    createPlayerProfile(input: $input, condition: $condition) {
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
export const updatePlayerProfile = /* GraphQL */ `
  mutation UpdatePlayerProfile(
    $input: UpdatePlayerProfileInput!
    $condition: ModelPlayerProfileConditionInput
  ) {
    updatePlayerProfile(input: $input, condition: $condition) {
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
export const deletePlayerProfile = /* GraphQL */ `
  mutation DeletePlayerProfile(
    $input: DeletePlayerProfileInput!
    $condition: ModelPlayerProfileConditionInput
  ) {
    deletePlayerProfile(input: $input, condition: $condition) {
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
export const createHostProfile = /* GraphQL */ `
  mutation CreateHostProfile(
    $input: CreateHostProfileInput!
    $condition: ModelHostProfileConditionInput
  ) {
    createHostProfile(input: $input, condition: $condition) {
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
export const updateHostProfile = /* GraphQL */ `
  mutation UpdateHostProfile(
    $input: UpdateHostProfileInput!
    $condition: ModelHostProfileConditionInput
  ) {
    updateHostProfile(input: $input, condition: $condition) {
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
export const deleteHostProfile = /* GraphQL */ `
  mutation DeleteHostProfile(
    $input: DeleteHostProfileInput!
    $condition: ModelHostProfileConditionInput
  ) {
    deleteHostProfile(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVenue = /* GraphQL */ `
  mutation CreateVenue(
    $input: CreateVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    createVenue(input: $input, condition: $condition) {
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
export const updateVenue = /* GraphQL */ `
  mutation UpdateVenue(
    $input: UpdateVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    updateVenue(input: $input, condition: $condition) {
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
export const deleteVenue = /* GraphQL */ `
  mutation DeleteVenue(
    $input: DeleteVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    deleteVenue(input: $input, condition: $condition) {
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
export const createTimeslot = /* GraphQL */ `
  mutation CreateTimeslot(
    $input: CreateTimeslotInput!
    $condition: ModelTimeslotConditionInput
  ) {
    createTimeslot(input: $input, condition: $condition) {
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
export const updateTimeslot = /* GraphQL */ `
  mutation UpdateTimeslot(
    $input: UpdateTimeslotInput!
    $condition: ModelTimeslotConditionInput
  ) {
    updateTimeslot(input: $input, condition: $condition) {
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
export const deleteTimeslot = /* GraphQL */ `
  mutation DeleteTimeslot(
    $input: DeleteTimeslotInput!
    $condition: ModelTimeslotConditionInput
  ) {
    deleteTimeslot(input: $input, condition: $condition) {
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
export const createTable = /* GraphQL */ `
  mutation CreateTable(
    $input: CreateTableInput!
    $condition: ModelTableConditionInput
  ) {
    createTable(input: $input, condition: $condition) {
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
export const updateTable = /* GraphQL */ `
  mutation UpdateTable(
    $input: UpdateTableInput!
    $condition: ModelTableConditionInput
  ) {
    updateTable(input: $input, condition: $condition) {
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
export const deleteTable = /* GraphQL */ `
  mutation DeleteTable(
    $input: DeleteTableInput!
    $condition: ModelTableConditionInput
  ) {
    deleteTable(input: $input, condition: $condition) {
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
export const createBoardGame = /* GraphQL */ `
  mutation CreateBoardGame(
    $input: CreateBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    createBoardGame(input: $input, condition: $condition) {
      id
      bgaId
      name
      description
      minPlayers
      maxPlayers
      category
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBoardGame = /* GraphQL */ `
  mutation UpdateBoardGame(
    $input: UpdateBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    updateBoardGame(input: $input, condition: $condition) {
      id
      bgaId
      name
      description
      minPlayers
      maxPlayers
      category
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBoardGame = /* GraphQL */ `
  mutation DeleteBoardGame(
    $input: DeleteBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    deleteBoardGame(input: $input, condition: $condition) {
      id
      bgaId
      name
      description
      minPlayers
      maxPlayers
      category
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createGameResult = /* GraphQL */ `
  mutation CreateGameResult(
    $input: CreateGameResultInput!
    $condition: ModelGameResultConditionInput
  ) {
    createGameResult(input: $input, condition: $condition) {
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
export const updateGameResult = /* GraphQL */ `
  mutation UpdateGameResult(
    $input: UpdateGameResultInput!
    $condition: ModelGameResultConditionInput
  ) {
    updateGameResult(input: $input, condition: $condition) {
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
export const deleteGameResult = /* GraphQL */ `
  mutation DeleteGameResult(
    $input: DeleteGameResultInput!
    $condition: ModelGameResultConditionInput
  ) {
    deleteGameResult(input: $input, condition: $condition) {
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
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
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
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
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
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
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
