interface Team {
  name: string;
  rank: number;
}

const teamA: Team = { name: "Studs", rank: 3 };
const teamB: Partial<Team> = { name: "Tigers" };
const teamC: Partial<Team> = { rank: 4 };
const teams = [teamA, teamB, teamC];

console.log("teamC.name", teamC.name);

export default function PartialEx() {
  return (
    <div>
      {teams.map((team: Partial<Team>) => (
        <div>
          {team.name}
          {team.rank}
        </div>
      ))}
    </div>
  );
}
