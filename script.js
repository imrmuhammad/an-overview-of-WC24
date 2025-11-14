
// Teams data with player bios
const teams = [
    {
        name: "India",
        board: "BCCI",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Board_of_Control_for_Cricket_in_India_Logo.svg/200px-Board_of_Control_for_Cricket_in_India_Logo.svg.png",
        captain: "Rohit Sharma",
        squad: [
            {name: "Rohit Sharma", role: "Opening batter", bio: "Rohit Sharma — aggressive Indian opening batter and an experienced leader known for big scores."},
            {name: "Virat Kohli", role: "Top-order batter", bio: "Virat Kohli — prolific run-scorer and one of the modern game's most consistent batters."},
            {name: "Rishabh Pant", role: "Wicketkeeper-batter", bio: "Rishabh Pant — dynamic wicketkeeper-batter known for powerful strokeplay."},
            {name: "Hardik Pandya", role: "All-rounder", bio: "Hardik Pandya — seam-bowling all-rounder who provides big-hitting late in the innings."},
            {name: "Jasprit Bumrah", role: "Fast bowler", bio: "Jasprit Bumrah — fast bowler renowned for yorkers and precise death-over bowling."},
            {name: "Kuldeep Yadav", role: "Left-arm wrist spinner", bio: "Kuldeep Yadav — left-arm wrist-spinner who can take crucial middle-overs wickets."},
            {name: "Ravindra Jadeja", role: "All-rounder", bio: "Ravindra Jadeja — reliable all-rounder famous for accuracy in bowling and energetic fielding."},
            {name: "Shivam Dube", role: "Batting all-rounder", bio: "Shivam Dube — powerful lower-order batter who can clear the ropes and chip in with useful overs."},
            {name: "Axar Patel", role: "Spin-bowling all-rounder", bio: "Axar Patel — left-arm spinner and useful lower-order batter, known for control and economy."},
            {name: "Mohammed Siraj", role: "Fast bowler", bio: "Mohammed Siraj — pace bowler who bowls well with the new ball and in short spells."},
            {name: "Arshdeep Singh", role: "Left-arm fast bowler", bio: "Arshdeep Singh — left-arm seamer who swings the ball and builds pressure with tight lines."},
            {name: "Suryakumar Yadav", role: "Middle-order batter", bio: "Suryakumar Yadav — innovative middle-order batter noted for improvisation and range of shot-making."},
            {name: "Sanju Samson", role: "Wicketkeeper-batter", bio: "Sanju Samson — skilled wicketkeeper-batter with a flair for counter-attacking innings."},
            {name: "Yashasvi Jaiswal", role: "Opening batter", bio: "Yashasvi Jaiswal — young opening batter who combines aggression with classical technique."},
            {name: "Yuzvendra Chahal", role: "Leg-spinner", bio: "Yuzvendra Chahal — leg-spinner adept at taking wickets in the middle overs."}
        ]
    },
    {
        name: "Australia",
        board: "Cricket Australia",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Cricket_Australia.svg/200px-Cricket_Australia.svg.png",
        captain: "Mitchell Marsh",
        squad: [
            {name: "Mitchell Marsh", role: "All-rounder", bio: "Mitchell Marsh — power-hitting all-rounder who contributes with medium-pace bowling."},
            {name: "Pat Cummins", role: "Fast bowler", bio: "Pat Cummins — world-class fast bowler and aggressive leader."},
            {name: "Glenn Maxwell", role: "Middle-order batter", bio: "Glenn Maxwell — explosive batter and handy off-spinner known for aggressive finishes."},
            {name: "David Warner", role: "Opening batter", bio: "David Warner — attacking opener who excels at scoring quickly in T20s."},
            {name: "Travis Head", role: "Top/middle-order batter", bio: "Travis Head — dynamic batter capable of playing both anchoring and aggressive roles."},
            {name: "Mitchell Starc", role: "Fast bowler", bio: "Mitchell Starc — left-arm fast bowler renowned for pace and lethal yorkers."},
            {name: "Josh Hazlewood", role: "Fast bowler", bio: "Josh Hazlewood — tall fast bowler known for accuracy and seam movement."},
            {name: "Adam Zampa", role: "Leg-spinner", bio: "Adam Zampa — leg-spinner who bowls with control and picks up middle-over wickets."},
            {name: "Marcus Stoinis", role: "All-rounder", bio: "Marcus Stoinis — power-hitting all-rounder offering medium-pace options."},
            {name: "Tim David", role: "Finisher", bio: "Tim David — big-hitting finisher who excels in the death overs."},
            {name: "Matthew Wade", role: "Wicketkeeper-batter", bio: "Matthew Wade — experienced keeper-batter known for aggressive cameos."},
            {name: "Cameron Green", role: "All-rounder", bio: "Cameron Green — tall all-rounder who contributes quick runs and seam bowling."},
            {name: "Josh Inglis", role: "Wicketkeeper-batter", bio: "Josh Inglis — hard-hitting keeper-batter with solid power hitting."},
            {name: "Nathan Ellis", role: "Fast bowler", bio: "Nathan Ellis — seamer with good variations in short formats."},
            {name: "Ashton Agar", role: "Left-arm spinner", bio: "Ashton Agar — left-arm spinner and handy lower-order batter."}
        ]
    },
    {
        name: "England",
        board: "ECB",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/England_and_Wales_Cricket_Board_logo.svg/200px-England_and_Wales_Cricket_Board_logo.svg.png",
        captain: "Jos Buttler",
        squad: [
            {name: "Jos Buttler", role: "Wicketkeeper-batter", bio: "Jos Buttler — explosive wicketkeeper-batter and strategic finisher."},
            {name: "Ben Stokes", role: "All-rounder", bio: "Ben Stokes — match-winning all-rounder known for big performances in key moments."},
            {name: "Joe Root", role: "Top-order batter", bio: "Joe Root — classically gifted batter capable of anchoring innings."},
            {name: "Jofra Archer", role: "Fast bowler", bio: "Jofra Archer — express fast bowler with impactful short bursts."},
            {name: "Mark Wood", role: "Fast bowler", bio: "Mark Wood — raw pace bowler who attacks the stumps."},
            {name: "Adil Rashid", role: "Leg-spinner", bio: "Adil Rashid — leg-spinner experienced in white-ball cricket."},
            {name: "Moeen Ali", role: "All-rounder", bio: "Moeen Ali — off-spinning all-rounder who offers left/right balance."},
            {name: "Sam Curran", role: "All-rounder", bio: "Sam Curran — left-arm seamer who swings the ball and can bat aggressively."},
            {name: "Chris Woakes", role: "All-rounder", bio: "Chris Woakes — seam-bowling all-rounder known for control and useful hitting."},
            {name: "Jonny Bairstow", role: "Wicketkeeper-batter", bio: "Jonny Bairstow — attacking top-order batter and capable keeper."},
            {name: "Phil Salt", role: "Opening batter", bio: "Phil Salt — brute-force opening batter who scores quickly."},
            {name: "Harry Brook", role: "Middle-order batter", bio: "Harry Brook — stylish middle-order batter with a strong technique."},
            {name: "Liam Livingstone", role: "All-rounder", bio: "Liam Livingstone — versatile batter and occasional spin option."},
            {name: "Reece Topley", role: "Fast bowler", bio: "Reece Topley — left-arm seamer effective with early swing."},
            {name: "Will Jacks", role: "All-rounder", bio: "Will Jacks — power-hitting batter and handy off-spin bowling option."}
        ]
    },
    {
        name: "Pakistan",
        board: "PCB",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Pakistan_Cricket_Board_Logo.svg/200px-Pakistan_Cricket_Board_Logo.svg.png",
        captain: "Babar Azam",
        squad: [
            {name: "Babar Azam", role: "Top-order batter", bio: "Babar Azam — elegant top-order batter and consistent run accumulator."},
            {name: "Mohammad Rizwan", role: "Wicketkeeper-batter", bio: "Mohammad Rizwan — dependable keeper-batter known for steady performances."},
            {name: "Shaheen Afridi", role: "Fast bowler", bio: "Shaheen Afridi — left-arm fast bowler with great bounce and swing."},
            {name: "Haris Rauf", role: "Fast bowler", bio: "Haris Rauf — fast bowler known for pace and accurate short spells."},
            {name: "Shadab Khan", role: "All-rounder", bio: "Shadab Khan — leg-spinning all-rounder and useful lower-order batter."},
            {name: "Mohammad Nawaz", role: "All-rounder", bio: "Mohammad Nawaz — left-arm spinner and flexible batting options."},
            {name: "Fakhar Zaman", role: "Opening batter", bio: "Fakhar Zaman — attacking left-handed opener with boundary power."},
            {name: "Iftikhar Ahmed", role: "Middle-order batter", bio: "Iftikhar Ahmed — explosive middle-order batter and handy fielder."},
            {name: "Imad Wasim", role: "Left-arm spinner", bio: "Imad Wasim — left-arm spinner and experienced white-ball performer."},
            {name: "Naseem Shah", role: "Fast bowler", bio: "Naseem Shah — young express pacer known for pace and aggression."},
            {name: "Usama Mir", role: "Off-spinner", bio: "Usama Mir — off-spin bowler with variations suited to T20 cricket."},
            {name: "Azam Khan", role: "Wicketkeeper-batter", bio: "Azam Khan — aggressive keeper-batter who can change the game's momentum."},
            {name: "Abrar Ahmed", role: "Leg-spinner", bio: "Abrar Ahmed — leg-spinner with wicket-taking ability."},
            {name: "Mohammad Amir", role: "Fast bowler", bio: "Mohammad Amir — experienced left-arm pace bowler with swing skills."},
            {name: "Saim Ayub", role: "Top-order batter", bio: "Saim Ayub — young left-handed batter with attacking instincts."}
        ]
    },
    {
        name: "South Africa",
        board: "CSA",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Cricket_South_Africa_Logo.svg/200px-Cricket_South_Africa_Logo.svg.png",
        captain: "Aiden Markram",
        squad: [
            {name: "Aiden Markram", role: "Top-order batter", bio: "Aiden Markram — technically sound top-order batter and leader."},
            {name: "Quinton de Kock", role: "Wicketkeeper-batter", bio: "Quinton de Kock — aggressive keeper-batter with quick starts."},
            {name: "Kagiso Rabada", role: "Fast bowler", bio: "Kagiso Rabada — spearhead fast bowler known for pace and bounce."},
            {name: "Anrich Nortje", role: "Fast bowler", bio: "Anrich Nortje — raw pace bowler with intimidating speed."},
            {name: "David Miller", role: "Middle-order batter", bio: "David Miller — experienced finisher with powerful hitting."},
            {name: "Heinrich Klaasen", role: "Wicketkeeper-batter", bio: "Heinrich Klaasen — inventive keeper-batter with big-hitting ability."},
            {name: "Keshav Maharaj", role: "Left-arm spinner", bio: "Keshav Maharaj — left-arm orthodox spinner with control in middle overs."},
            {name: "Tabraiz Shamsi", role: "Left-arm wrist spinner", bio: "Tabraiz Shamsi — wrist-spinner who offers variations and guile."},
            {name: "Marco Jansen", role: "All-rounder", bio: "Marco Jansen — tall seamer and useful lower-order batter."},
            {name: "Reeza Hendricks", role: "Opening batter", bio: "Reeza Hendricks — solid opening batter known for building foundations."},
            {name: "Tristan Stubbs", role: "Wicketkeeper-batter", bio: "Tristan Stubbs — young keeper-batter with aggressive intent."},
            {name: "Gerald Coetzee", role: "Fast bowler", bio: "Gerald Coetzee — promising pace bowler with energy and bounce."},
            {name: "Ottneil Baartman", role: "All-rounder", bio: "Ottneil Baartman — batting all-rounder with useful leg-spin options."},
            {name: "Ryan Rickelton", role: "Wicketkeeper-batter", bio: "Ryan Rickelton — stylish batter who can also keep wickets."},
            {name: "Bjorn Fortuin", role: "All-rounder", bio: "Bjorn Fortuin — seam-bowling all-rounder offering balance to the side."}
        ]
    },
    {
        name: "New Zealand",
        board: "NZC",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/New_Zealand_Cricket_logo.svg/200px-New_Zealand_Cricket_logo.svg.png",
        captain: "Kane Williamson",
        squad: [
            {name: "Kane Williamson", role: "Top-order batter", bio: "Kane Williamson — composed batter with great technique and temperament."},
            {name: "Tim Southee", role: "Fast bowler", bio: "Tim Southee — swing bowler who bowls well in all conditions."},
            {name: "Trent Boult", role: "Fast bowler", bio: "Trent Boult — left-arm swing bowler lethal with the new ball."},
            {name: "Mitchell Santner", role: "Spin-bowling all-rounder", bio: "Mitchell Santner — left-arm spinner who also contributes useful runs."},
            {name: "Glenn Phillips", role: "Middle-order batter", bio: "Glenn Phillips — aggressive middle-order batter and handy keeper."},
            {name: "Devon Conway", role: "Opening batter", bio: "Devon Conway — dependable opening batter with solid technique."},
            {name: "Daryl Mitchell", role: "All-rounder", bio: "Daryl Mitchell — powerful batter and useful medium-pace bowler."},
            {name: "Lockie Ferguson", role: "Fast bowler", bio: "Lockie Ferguson — express pacer known for speed and bounce."},
            {name: "Ish Sodhi", role: "Leg-spinner", bio: "Ish Sodhi — leg-spinner with good variations for T20 cricket."},
            {name: "Mark Chapman", role: "Top-order batter", bio: "Mark Chapman — top-order batter with an attacking mindset."},
            {name: "Finn Allen", role: "Opening batter", bio: "Finn Allen — explosive opening batter with high strike rates."},
            {name: "James Neesham", role: "All-rounder", bio: "James Neesham — hard-hitting all-rounder who bowls medium pace."},
            {name: "Rachin Ravindra", role: "Top-order batter", bio: "Rachin Ravindra — elegant batter who also bowls useful spin."},
            {name: "Ben Sears", role: "Fast bowler", bio: "Ben Sears — young seamer with good control."},
            {name: "Michael Bracewell", role: "All-rounder", bio: "Michael Bracewell — middle-order batter and useful off-spin option."}
        ]
    },
    {
        name: "West Indies",
        board: "CWI",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Cricket_West_Indies.svg/200px-Cricket_West_Indies.svg.png",
        captain: "Rovman Powell",
        squad: [
            {name: "Rovman Powell", role: "Middle-order batter", bio: "Rovman Powell — powerful middle-order batter and captain."},
            {name: "Nicholas Pooran", role: "Wicketkeeper-batter", bio: "Nicholas Pooran — flamboyant keeper-batter known for big hitting."},
            {name: "Andre Russell", role: "All-rounder", bio: "Andre Russell — devastating power-hitter and fast bowling option."},
            {name: "Alzarri Joseph", role: "Fast bowler", bio: "Alzarri Joseph — pace bowler who generates good bounce."},
            {name: "Akeal Hosein", role: "Left-arm spinner", bio: "Akeal Hosein — left-arm spinner noted for control and accuracy."},
            {name: "Shimron Hetmyer", role: "Middle-order batter", bio: "Shimron Hetmyer — aggressive middle-order batter with flair."},
            {name: "Brandon King", role: "Opening batter", bio: "Brandon King — consistent top-order batter for the West Indies."},
            {name: "Johnson Charles", role: "Top-order batter", bio: "Johnson Charles — experienced opener with boundary-hitting ability."},
            {name: "Romario Shepherd", role: "All-rounder", bio: "Romario Shepherd — seam-bowling all-rounder who hits big when required."},
            {name: "Sherfane Rutherford", role: "All-rounder", bio: "Sherfane Rutherford — explosive batter and useful medium pacer."},
            {name: "Gudakesh Motie", role: "Left-arm spinner", bio: "Gudakesh Motie — left-arm orthodox spinner who takes wickets in the middle overs."},
            {name: "Shai Hope", role: "Top-order batter", bio: "Shai Hope — technically solid batter who anchors the innings."},
            {name: "Kyle Mayers", role: "All-rounder", bio: "Kyle Mayers — powerful batter and seam bowling option."},
            {name: "Obed McCoy", role: "Fast bowler", bio: "Obed McCoy — left-arm quick effective in shorter formats."},
            {name: "Roston Chase", role: "All-rounder", bio: "Roston Chase — off-spinning all-rounder with a solid technique."}
        ]
    },
    {
        name: "Sri Lanka",
        board: "SLC",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Sri_Lanka_Cricket_Logo.svg/200px-Sri_Lanka_Cricket_Logo.svg.png",
        captain: "Wanindu Hasaranga",
        squad: [
            {name: "Wanindu Hasaranga", role: "All-rounder", bio: "Wanindu Hasaranga — leg-spinning all-rounder and key match-winner."},
            {name: "Pathum Nissanka", role: "Opening batter", bio: "Pathum Nissanka — classy opening batter with a solid technique."},
            {name: "Kusal Mendis", role: "Middle-order batter", bio: "Kusal Mendis — experienced batter capable of playing big innings."},
            {name: "Dhananjaya de Silva", role: "All-rounder", bio: "Dhananjaya de Silva — dependable all-rounder who bowls spin."},
            {name: "Charith Asalanka", role: "Top/middle-order batter", bio: "Charith Asalanka — reliable batter who adapts to match situations."},
            {name: "Dasun Shanaka", role: "All-rounder", bio: "Dasun Shanaka — aggressive leader and handy medium-pace option."},
            {name: "Maheesh Theekshana", role: "Spinner", bio: "Maheesh Theekshana — mystery spinner effective in T20s."},
            {name: "Matheesha Pathirana", role: "Fast bowler", bio: "Matheesha Pathirana — young pacer known for deceptive pace and toe-crushing yorkers."},
            {name: "Nuwan Thushara", role: "Fast bowler", bio: "Nuwan Thushara — seamer skilled at hitting the deck."},
            {name: "Angelo Mathews", role: "All-rounder", bio: "Angelo Mathews — experienced middle-order batter and useful seamer."},
            {name: "Dinesh Chandimal", role: "Wicketkeeper-batter", bio: "Dinesh Chandimal — experienced batter and occasional keeper."},
            {name: "Dushmantha Chameera", role: "Fast bowler", bio: "Dushmantha Chameera — quick bowler with pace and bounce."},
            {name: "Dilshan Madushanka", role: "Fast bowler", bio: "Dilshan Madushanka — young seamer with good pace."},
            {name: "Kamindu Mendis", role: "All-rounder", bio: "Kamindu Mendis — spin-bowling all-rounder who can stabilize the innings."},
            {name: "Binura Fernando", role: "Fast bowler", bio: "Binura Fernando — pace option who bowls with aggression."}
        ]
    },
    {
        name: "Bangladesh",
        board: "BCB",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Bangladesh_Cricket_Board_Logo.svg/200px-Bangladesh_Cricket_Board_Logo.svg.png",
        captain: "Najmul Hossain Shanto",
        squad: [
            {name: "Najmul Hossain Shanto", role: "Top-order batter", bio: "Najmul Hossain Shanto — dependable top-order batter for Bangladesh."},
            {name: "Shakib Al Hasan", role: "All-rounder", bio: "Shakib Al Hasan — world-class all-rounder with both bat and ball prowess."},
            {name: "Mushfiqur Rahim", role: "Wicketkeeper-batter", bio: "Mushfiqur Rahim — veteran keeper-batter noted for consistency."},
            {name: "Mustafizur Rahman", role: "Fast bowler", bio: "Mustafizur Rahman — left-arm seamer known for cutters and variations."},
            {name: "Taskin Ahmed", role: "Fast bowler", bio: "Taskin Ahmed — pace bowler who bowls aggressively with bounce."},
            {name: "Litton Das", role: "Wicketkeeper-batter", bio: "Litton Das — top-order batter and occasional keeper with elegant strokeplay."},
            {name: "Mahmudullah", role: "Middle-order batter", bio: "Mahmudullah — experienced middle-order batter and finisher."},
            {name: "Mehidy Hasan Miraz", role: "All-rounder", bio: "Mehidy Hasan Miraz — off-spinning all-rounder with dependable batting."},
            {name: "Rishad Hossain", role: "Spinner", bio: "Rishad Hossain — left-arm spinner used in middle overs."},
            {name: "Towhid Hridoy", role: "Top-order batter", bio: "Towhid Hridoy — young top-order batter with promise."},
            {name: "Tanzid Hasan", role: "Batter", bio: "Tanzid Hasan — promising batter in domestic and international circuits."},
            {name: "Jaker Ali", role: "Wicketkeeper-batter", bio: "Jaker Ali — wicketkeeper-batter with aggressive instincts."},
            {name: "Tanvir Islam", role: "Left-arm spinner", bio: "Tanvir Islam — left-arm spinner offering control and variation."},
            {name: "Shoriful Islam", role: "Fast bowler", bio: "Shoriful Islam — young pacer with good pace and swing."},
            {name: "Soumya Sarkar", role: "All-rounder", bio: "Soumya Sarkar — opening batter and medium-pace option."}
        ]
    },
    {
        name: "Afghanistan",
        board: "ACB",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Afghanistan_Cricket_Board.svg/200px-Afghanistan_Cricket_Board_Logo.svg.png",
        captain: "Rashid Khan",
        squad: [
            {name: "Rashid Khan", role: "Leg-spinner", bio: "Rashid Khan — world-class leg-spinner and useful lower-order batter."},
            {name: "Mohammad Nabi", role: "All-rounder", bio: "Mohammad Nabi — experienced all-rounder with tactical awareness."},
            {name: "Mujeeb Ur Rahman", role: "Spinner", bio: "Mujeeb Ur Rahman — mystery spinner effective in T20s."},
            {name: "Fazalhaq Farooqi", role: "Fast bowler", bio: "Fazalhaq Farooqi — exciting young pace bowler with promise."},
            {name: "Naveen-ul-Haq", role: "Fast bowler", bio: "Naveen-ul-Haq — seamer who bowls with good pace and variations."},
            {name: "Rahmanullah Gurbaz", role: "Wicketkeeper-batter", bio: "Rahmanullah Gurbaz — aggressive opening keeper-batter."},
            {name: "Ibrahim Zadran", role: "Top-order batter", bio: "Ibrahim Zadran — stylish top-order batter for Afghanistan."},
            {name: "Azmatullah Omarzai", role: "All-rounder", bio: "Azmatullah Omarzai — seam-bowling all-rounder with power-hitting."},
            {name: "Gulbadin Naib", role: "All-rounder", bio: "Gulbadin Naib — experienced all-rounder known for big hits."},
            {name: "Najibullah Zadran", role: "Middle-order batter", bio: "Najibullah Zadran — experienced middle-order batter with finishing skills."},
            {name: "Noor Ahmad", role: "Spinner", bio: "Noor Ahmad — young spinner with good variations for T20 cricket."},
            {name: "Nangeyalia Kharote", role: "All-rounder", bio: "Nangeyalia Kharote — versatile player offering balance to the side."},
            {name: "Karim Janat", role: "All-rounder", bio: "Karim Janat — seam-bowling all-rounder with big-hitting ability."},
            {name: "Mohammad Ishaq", role: "Top-order batter", bio: "Mohammad Ishaq — promising top-order batter in limited overs."},
            {name: "Hazratullah Zazai", role: "Opening batter", bio: "Hazratullah Zazai — destructive opening batter with high strike rate."}
        ]
    }
];

// Rendering and behavior updated to use player objects
let currentTeamIndex = 0;
let filteredTeams = teams.slice();

function renderTeams(list = filteredTeams) {
    const container = document.getElementById('teamsContainer');
    const selector = document.getElementById('teamSelector');

    container.innerHTML = '';
    selector.innerHTML = '';

    list.forEach((team, index) => {
        const teamPage = document.createElement('div');
        teamPage.className = 'team-page' + (index === 0 ? ' active' : '');
        teamPage.dataset.index = index;
        teamPage.innerHTML = `
            <div class="team-header">
                <img src="${team.logo}" alt="${team.board}" class="team-logo" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3E${team.board}%3C/text%3E%3C/svg%3E'">
                <div class="team-info">
                    <h2>${team.name}</h2>
                    <p>${team.board}</p>
                </div>
            </div>
            <div class="squad-container">
                <h3>Squad</h3>
                <div class="players-grid">
                    ${team.squad.map(player => `
                        <div class="player-card${player.name === team.captain ? ' captain' : ''}" tabindex="0" data-player="${player.name}" data-team="${team.name}" data-bio="${player.bio}" data-role="${player.role}">
                            <div class="player-name">${player.name}${player.name === team.captain ? ' (C)' : ''}</div>
                            <div class="player-role" aria-hidden="true">${player.role}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(teamPage);

        const selectorBtn = document.createElement('button');
        selectorBtn.textContent = team.name;
        selectorBtn.className = index === 0 ? 'active' : '';
        selectorBtn.onclick = () => goToTeam(index);
        selector.appendChild(selectorBtn);
    });

    // Attach event listeners for player cards
    document.querySelectorAll('.player-card').forEach(el => {
        el.addEventListener('click', () => openPlayerModal(el.dataset.player, el.dataset.team, el.dataset.role, el.dataset.bio, el.classList.contains('captain')));
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') openPlayerModal(el.dataset.player, el.dataset.team, el.dataset.role, el.dataset.bio, el.classList.contains('captain'));
        });
    });

    currentTeamIndex = 0;
    updateNavigation();
}

function navigateTeam(direction) {
    const pages = document.querySelectorAll('.team-page');
    const selectorBtns = document.querySelectorAll('.team-selector button');

    if (currentTeamIndex + direction < 0 || currentTeamIndex + direction >= pages.length) return;

    pages[currentTeamIndex].classList.remove('active');
    if (selectorBtns[currentTeamIndex]) selectorBtns[currentTeamIndex].classList.remove('active');

    currentTeamIndex += direction;

    pages[currentTeamIndex].classList.add('active');
    if (selectorBtns[currentTeamIndex]) selectorBtns[currentTeamIndex].classList.add('active');

    updateNavigation();
}

function goToTeam(index) {
    const pages = document.querySelectorAll('.team-page');
    const selectorBtns = document.querySelectorAll('.team-selector button');

    pages[currentTeamIndex].classList.remove('active');
    if (selectorBtns[currentTeamIndex]) selectorBtns[currentTeamIndex].classList.remove('active');

    currentTeamIndex = index;

    pages[currentTeamIndex].classList.add('active');
    if (selectorBtns[currentTeamIndex]) selectorBtns[currentTeamIndex].classList.add('active');

    updateNavigation();
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicator = document.getElementById('pageIndicator');
    const pages = document.querySelectorAll('.team-page');

    prevBtn.disabled = currentTeamIndex === 0;
    nextBtn.disabled = currentTeamIndex === pages.length - 1;

    indicator.textContent = `Team ${currentTeamIndex + 1} of ${pages.length}`;
}

// Modal handling (updated to show bio & role)
const modal = document.getElementById('playerModal');
const modalName = document.getElementById('modalPlayerName');
const modalTeam = document.getElementById('modalPlayerTeam');
const closeModal = document.getElementById('closeModal');
const copyBtn = document.getElementById('copyBtn');

function openPlayerModal(name, team, role, bio, isCaptain=false) {
    modal.setAttribute('aria-hidden', 'false');
    modalName.textContent = name + (isCaptain ? ' — Captain' : '');
    modalTeam.innerHTML = `<strong>Team:</strong> ${team} <br><strong>Role:</strong> ${role} <br><br>${bio}`;
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(name).then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(()=> copyBtn.textContent = 'Copy name', 1000);
        });
    };
    // focus for accessibility
    closeModal.focus();
}

function closePlayerModal() {
    modal.setAttribute('aria-hidden', 'true');
}

// close handlers
closeModal.addEventListener('click', closePlayerModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closePlayerModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePlayerModal();
    if (e.key === 'ArrowRight') navigateTeam(1);
    if (e.key === 'ArrowLeft') navigateTeam(-1);
});

// Search injection (non-destructive): adds a small search input into header
(function addSearch() {
    const header = document.querySelector('.header');
    const searchWrap = document.createElement('div');
    searchWrap.className = 'search';
    searchWrap.innerHTML = `<input id="teamSearch" placeholder="Search teams or players (type and press Enter)" aria-label="Search teams or players">`;
    header.appendChild(searchWrap);

    const input = document.getElementById('teamSearch');
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const q = input.value.trim().toLowerCase();
            if (!q) {
                filteredTeams = teams.slice();
            } else {
                filteredTeams = teams.filter(t => t.name.toLowerCase().includes(q) || t.squad.some(p => p.name.toLowerCase().includes(q)));
            }
            renderTeams(filteredTeams);
        }
    });
})();

// initial render
renderTeams();
