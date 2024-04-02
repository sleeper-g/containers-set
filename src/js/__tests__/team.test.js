import { Team, Character } from './../team'

test('check exist', () => {
  const user = new Character('username');
  expect(user).toEqual({ player: 'username' })
})

test('add team', () => {
  const team = new Team();
  team.add('username');
  expect(team.members).toEqual(new Set(['username']))
});

test('add all', () => {
  const res = new Set(['user0', 'user1', 'user2'])
  const team = new Team();
  team.addAll('user0', 'user1', 'user2')
  expect(team.members).toEqual(res)
})
