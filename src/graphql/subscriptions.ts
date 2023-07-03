/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayerProfile = /* GraphQL */ `
  subscription OnCreatePlayerProfile(
    $filter: ModelSubscriptionPlayerProfileFilterInput
    $owner: String
  ) {
    onCreatePlayerProfile(filter: $filter, owner: $owner) {
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
export const onUpdatePlayerProfile = /* GraphQL */ `
  subscription OnUpdatePlayerProfile(
    $filter: ModelSubscriptionPlayerProfileFilterInput
    $owner: String
  ) {
    onUpdatePlayerProfile(filter: $filter, owner: $owner) {
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
export const onDeletePlayerProfile = /* GraphQL */ `
  subscription OnDeletePlayerProfile(
    $filter: ModelSubscriptionPlayerProfileFilterInput
    $owner: String
  ) {
    onDeletePlayerProfile(filter: $filter, owner: $owner) {
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
export const onCreateHostProfile = /* GraphQL */ `
  subscription OnCreateHostProfile(
    $filter: ModelSubscriptionHostProfileFilterInput
    $owner: String
  ) {
    onCreateHostProfile(filter: $filter, owner: $owner) {
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
export const onUpdateHostProfile = /* GraphQL */ `
  subscription OnUpdateHostProfile(
    $filter: ModelSubscriptionHostProfileFilterInput
    $owner: String
  ) {
    onUpdateHostProfile(filter: $filter, owner: $owner) {
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
export const onDeleteHostProfile = /* GraphQL */ `
  subscription OnDeleteHostProfile(
    $filter: ModelSubscriptionHostProfileFilterInput
    $owner: String
  ) {
    onDeleteHostProfile(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateVenue = /* GraphQL */ `
  subscription OnCreateVenue(
    $filter: ModelSubscriptionVenueFilterInput
    $owner: String
  ) {
    onCreateVenue(filter: $filter, owner: $owner) {
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
export const onUpdateVenue = /* GraphQL */ `
  subscription OnUpdateVenue(
    $filter: ModelSubscriptionVenueFilterInput
    $owner: String
  ) {
    onUpdateVenue(filter: $filter, owner: $owner) {
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
export const onDeleteVenue = /* GraphQL */ `
  subscription OnDeleteVenue(
    $filter: ModelSubscriptionVenueFilterInput
    $owner: String
  ) {
    onDeleteVenue(filter: $filter, owner: $owner) {
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
export const onCreateTimeslot = /* GraphQL */ `
  subscription OnCreateTimeslot(
    $filter: ModelSubscriptionTimeslotFilterInput
    $owner: String
  ) {
    onCreateTimeslot(filter: $filter, owner: $owner) {
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
export const onUpdateTimeslot = /* GraphQL */ `
  subscription OnUpdateTimeslot(
    $filter: ModelSubscriptionTimeslotFilterInput
    $owner: String
  ) {
    onUpdateTimeslot(filter: $filter, owner: $owner) {
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
export const onDeleteTimeslot = /* GraphQL */ `
  subscription OnDeleteTimeslot(
    $filter: ModelSubscriptionTimeslotFilterInput
    $owner: String
  ) {
    onDeleteTimeslot(filter: $filter, owner: $owner) {
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
export const onCreateTable = /* GraphQL */ `
  subscription OnCreateTable(
    $filter: ModelSubscriptionTableFilterInput
    $owner: String
  ) {
    onCreateTable(filter: $filter, owner: $owner) {
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
export const onUpdateTable = /* GraphQL */ `
  subscription OnUpdateTable(
    $filter: ModelSubscriptionTableFilterInput
    $owner: String
  ) {
    onUpdateTable(filter: $filter, owner: $owner) {
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
export const onDeleteTable = /* GraphQL */ `
  subscription OnDeleteTable(
    $filter: ModelSubscriptionTableFilterInput
    $owner: String
  ) {
    onDeleteTable(filter: $filter, owner: $owner) {
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
export const onCreateBoardGame = /* GraphQL */ `
  subscription OnCreateBoardGame(
    $filter: ModelSubscriptionBoardGameFilterInput
  ) {
    onCreateBoardGame(filter: $filter) {
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
export const onUpdateBoardGame = /* GraphQL */ `
  subscription OnUpdateBoardGame(
    $filter: ModelSubscriptionBoardGameFilterInput
  ) {
    onUpdateBoardGame(filter: $filter) {
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
export const onDeleteBoardGame = /* GraphQL */ `
  subscription OnDeleteBoardGame(
    $filter: ModelSubscriptionBoardGameFilterInput
  ) {
    onDeleteBoardGame(filter: $filter) {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame(
    $filter: ModelSubscriptionGameFilterInput
    $owner: String
  ) {
    onCreateGame(filter: $filter, owner: $owner) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame(
    $filter: ModelSubscriptionGameFilterInput
    $owner: String
  ) {
    onUpdateGame(filter: $filter, owner: $owner) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame(
    $filter: ModelSubscriptionGameFilterInput
    $owner: String
  ) {
    onDeleteGame(filter: $filter, owner: $owner) {
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
export const onCreateGameResult = /* GraphQL */ `
  subscription OnCreateGameResult(
    $filter: ModelSubscriptionGameResultFilterInput
    $owner: String
  ) {
    onCreateGameResult(filter: $filter, owner: $owner) {
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
export const onUpdateGameResult = /* GraphQL */ `
  subscription OnUpdateGameResult(
    $filter: ModelSubscriptionGameResultFilterInput
    $owner: String
  ) {
    onUpdateGameResult(filter: $filter, owner: $owner) {
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
export const onDeleteGameResult = /* GraphQL */ `
  subscription OnDeleteGameResult(
    $filter: ModelSubscriptionGameResultFilterInput
    $owner: String
  ) {
    onDeleteGameResult(filter: $filter, owner: $owner) {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating(
    $filter: ModelSubscriptionRatingFilterInput
    $owner: String
  ) {
    onCreateRating(filter: $filter, owner: $owner) {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating(
    $filter: ModelSubscriptionRatingFilterInput
    $owner: String
  ) {
    onUpdateRating(filter: $filter, owner: $owner) {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating(
    $filter: ModelSubscriptionRatingFilterInput
    $owner: String
  ) {
    onDeleteRating(filter: $filter, owner: $owner) {
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
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onCreateBooking(filter: $filter, owner: $owner) {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onUpdateBooking(filter: $filter, owner: $owner) {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onDeleteBooking(filter: $filter, owner: $owner) {
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
