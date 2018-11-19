function ParticipantDto (name) {
  this.name = name
  this.events = []
}

function EventDto (name, date, start, end) {
  this.name = name
  this.eventDate = date
  this.startTime = start
  this.endTime = end
}

export default {
  name: 'eventregistration',
  data () {
    return {
      participants: [],
      newParticipant: '',
      errorParticipant: '',
      response: []
    }
  },
  created: function () {
  // Test participants
  const p1 = new ParticipantDto('Alex')
  const p2 = new ParticipantDto('Boris')
  // Test event for p2 participant
  p2.events=[{"name":"Trip from Ottawa to Montreal","eventDate":"2018-10-31","startTime":"18:00","endTime":"23:00"}]
  // Sample initial content
  this.participants = [p1, p2]
},
methods: {
  createParticipant: function (participantName) {
    // Create a new participant and add it to the list of participants
    var p = new ParticipantDto(participantName)
    this.participants.push(p)
    // Reset the name field for new participants
    this.newParticipant = ''
  }
}
}

