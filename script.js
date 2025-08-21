// Comprehensive sex positions database with 100+ positions
const sexPositions = [
    // Classic Positions (1-20)
    { name: "Missionary", description: "Classic face-to-face position with intimate eye contact. One partner lies on their back while the other lies on top.", howTo: "1. One partner lies on their back with legs slightly apart. 2. The other partner positions themselves on top, supporting their weight with arms. 3. Maintain eye contact and synchronize breathing. 4. Start with gentle movements and gradually increase intensity.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "Doggy Style", description: "Rear-entry position where one partner bends over while the other enters from behind, allowing for deep penetration.", howTo: "1. One partner gets on hands and knees on the bed. 2. The other partner kneels behind them. 3. Place hands on hips or lower back for support. 4. Start slowly and communicate comfort levels. 5. Adjust angle for optimal pleasure.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "Cowgirl", description: "Woman on top position where the receiving partner straddles and controls the rhythm and depth.", howTo: "1. One partner lies on their back. 2. The other partner straddles them, facing forward. 3. Use hands on chest or bed for support. 4. Control the rhythm and depth of movement. 5. Lean forward or backward to change angles.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "Reverse Cowgirl", description: "Woman on top but facing away, allowing for different sensations and visual appeal.", howTo: "1. One partner lies on their back. 2. The other partner straddles them, facing away. 3. Use hands on thighs or bed for balance. 4. Start with slow movements to find comfortable rhythm. 5. Communicate for guidance and comfort.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "Spooning", description: "Side-by-side position where partners lie like spoons, intimate and comfortable for extended sessions.", howTo: "1. Both partners lie on their sides facing the same direction. 2. The partner behind moves closer. 3. Adjust hips and legs for comfortable alignment. 4. Use gentle, slow movements. 5. Perfect for intimate conversation and closeness.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "Standing", description: "Upright position that can be done against a wall or free-standing for adventurous couples.", howTo: "1. Find a wall or stable surface for support. 2. One partner stands against the wall. 3. The other partner approaches from the front. 4. Use wall for leverage and support. 5. Adjust heights with steps or bending knees.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Lotus", description: "Sitting position where partners face each other with legs wrapped around, perfect for intimacy and connection.", howTo: "1. One partner sits cross-legged. 2. The other partner sits on their lap, facing them. 3. Wrap legs around each other's waist. 4. Hold each other close and rock gently. 5. Focus on deep eye contact and breathing together.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Bridge", description: "Advanced position requiring flexibility where one partner creates a bridge arch.", howTo: "1. One partner lies on their back and lifts hips into bridge pose. 2. Use hands and feet for support. 3. The other partner kneels and approaches carefully. 4. Start slowly and maintain balance. 5. Communicate constantly for comfort and safety.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "Side Straddle", description: "Creative side position combining elements of spooning with more active movement.", howTo: "1. Start in spooning position. 2. The front partner lifts their top leg. 3. The back partner adjusts angle for access. 4. Use hands for support and balance. 5. Maintain close body contact throughout.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Chair", description: "Utilizes furniture for support and new angles of intimacy and comfort.", howTo: "1. One partner sits on a sturdy chair. 2. The other partner straddles them, facing forward or backward. 3. Use chair arms for support. 4. Let the seated partner help guide movements. 5. Experiment with different angles and rhythms.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Butterfly", description: "Partner lies on edge of bed/surface with hips positioned for optimal angle and comfort.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Pretzel Dip", description: "Complex position combining multiple angles for varied sensations and deep connection.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Seashell", description: "Flexible position where receiving partner's legs are positioned for maximum intimacy.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Tabletop", description: "Partner positioned on a table or elevated surface for height variation and comfort.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The T-Bone", description: "Perpendicular position creating a T-shape for unique angles and sensations.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The X Factor", description: "Crossing position that creates intense intimacy through unique body positioning.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Lazy Dog", description: "Relaxed variation of doggy style with more comfort for extended sessions.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Flatiron", description: "Lying flat position with legs closed for increased tightness and sensation.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "Face Off", description: "Intense eye contact position while seated, perfect for emotional connection.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Wheelbarrow", description: "Adventurous position requiring strength and balance for the thrill-seeking couple.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },

    // Advanced Positions (21-50)
    { name: "The Crab Walk", description: "Playful and challenging position that requires coordination and flexibility.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Scoop Me Up", description: "Comfortable spooning variation with enhanced intimacy and ease of movement.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Standing Split", description: "Advanced standing position requiring flexibility and balance for adventurous partners.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Cuddle Huddle", description: "Intimate position focused on closeness and emotional connection during intimacy.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Pinball Wizard", description: "Dynamic position with lots of movement and energy for playful couples.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Hoverboard", description: "Challenging position that seems to defy gravity, requiring strength and coordination.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Magic Mountain", description: "Ultimate challenge position combining flexibility, strength, and adventure for experienced couples.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Twisted Sister", description: "Creative twist on classic positions with intertwined legs for unique sensations.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Swing Set", description: "Playful position utilizing momentum and rhythm for dynamic intimacy.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Captain's Chair", description: "Seated position with one partner in control, perfect for deep eye contact.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Tango Twist", description: "Dance-inspired position with passionate movements and intimate connection.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Stairway to Heaven", description: "Elevated position using stairs or steps for varied heights and angles.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Venus Flytrap", description: "Intimate position with receiving partner controlling the action through leg movement.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Rocket Ship", description: "Energetic position with upward motion for an exciting intimate experience.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Zen Garden", description: "Peaceful and meditative position focusing on slow, mindful movements.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Tornado", description: "Spinning variation that adds excitement and unpredictability to intimacy.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Eagle's Nest", description: "Elevated position with one partner lifted for a bird's eye view experience.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Lighthouse", description: "Standing position with one partner as the beacon guiding the intimate journey.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Ocean Wave", description: "Fluid, rhythmic position mimicking the gentle motion of ocean waves.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Fire Dance", description: "Passionate and energetic position with lots of heat and movement.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Silk Road", description: "Smooth and luxurious position focusing on sensual, flowing movements.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Compass Rose", description: "Multi-directional position exploring all angles and orientations.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Constellation", description: "Stargazing position perfect for outdoor adventures under the night sky.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Time Warp", description: "Position that makes time stand still through intense intimate connection.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Dream Catcher", description: "Ethereal position that captures and fulfills intimate dreams and fantasies.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Golden Gate", description: "Bridge-like position creating a golden pathway to intimate bliss.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Secret Garden", description: "Hidden and intimate position for exploring each other's secret desires.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Phoenix Rising", description: "Passionate position that ignites and rises like a phoenix from the flames.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Midnight Express", description: "Fast-paced position for couples who like their intimacy with speed and excitement.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Crystal Cave", description: "Mysterious and enchanting position for exploring hidden depths of intimacy.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },

    // Creative Positions (51-80)
    { name: "The Yoga Master", description: "Flexibility-focused position inspired by yoga poses for mindful intimacy.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Artist's Canvas", description: "Creative position where bodies become the canvas for intimate expression.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Symphony", description: "Harmonious position where bodies move in perfect musical rhythm.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Magic Carpet", description: "Floating sensation position that takes you on an intimate journey.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Roller Coaster", description: "Thrilling ups and downs for couples who love excitement in their intimacy.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Treasure Hunt", description: "Exploratory position for discovering new erogenous zones and pleasures.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Time Machine", description: "Position that transports you to different eras of passionate love.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Puzzle Piece", description: "Perfect fit position where bodies interlock like complementary puzzle pieces.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Shooting Star", description: "Quick and bright position that leaves a lasting impression.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Infinity Pool", description: "Endless pleasure position with no boundaries or limits.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Kaleidoscope", description: "Ever-changing position with beautiful patterns of movement and sensation.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Moonbeam", description: "Gentle and illuminating position perfect for romantic nighttime encounters.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Solar Eclipse", description: "Rare and special position for extraordinary intimate moments.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Origami", description: "Intricate folding position that creates beautiful intimate sculptures.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Waterfall", description: "Cascading position with flowing movements like water over rocks.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Northern Lights", description: "Spectacular position that creates colorful waves of pleasure.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Compass", description: "Directional position that helps you navigate to new intimate territories.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Prism", description: "Position that refracts intimacy into a spectrum of colorful sensations.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Metamorphosis", description: "Transformative position that evolves throughout the intimate experience.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Labyrinth", description: "Complex position with twists and turns leading to the center of pleasure.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Mandala", description: "Circular position creating sacred geometry with intertwined bodies.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Spiral Galaxy", description: "Cosmic position that spirals into infinite depths of intimacy.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Diamond Mine", description: "Precious position for discovering hidden gems of pleasure.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Quicksand", description: "Slowly sinking position that gradually increases in intensity.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Thunderstorm", description: "Powerful position with building tension and explosive release.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Oasis", description: "Refreshing position that provides relief and rejuvenation.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Mirage", description: "Illusion-like position that seems too good to be true but is completely real.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Avalanche", description: "Overwhelming position that builds momentum and sweeps you away.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Greenhouse", description: "Nurturing position that helps intimate seeds blossom into beautiful experiences.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Clockwork", description: "Precise and rhythmic position with perfect timing and synchronization.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },

    // Exotic Positions (81-110)
    { name: "The Bermuda Triangle", description: "Mysterious position where normal rules don't apply and magic happens.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Silk Scarf", description: "Smooth and luxurious position with flowing, silky movements.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The DNA Helix", description: "Double-twisted position creating the building blocks of intimate life.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Lava Lamp", description: "Slowly flowing position with mesmerizing, hypnotic movements.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Wind Chime", description: "Gentle position with subtle movements that create harmonious sensations.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Rubik's Cube", description: "Complex position that requires patience and skill to solve perfectly.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Pendulum", description: "Swinging position with rhythmic back-and-forth movements.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Telescope", description: "Far-reaching position for exploring distant galaxies of pleasure.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Anchor", description: "Steady and secure position that keeps you grounded in the moment.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Shooting Range", description: "Precision position for hitting the target every time.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Velvet Rope", description: "Exclusive position for VIP intimate experiences.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Time Capsule", description: "Position that preserves the perfect moment for eternity.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Memory Foam", description: "Adaptable position that molds to your unique intimate needs.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Hologram", description: "Multi-dimensional position that exists on multiple planes of pleasure.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Soundwave", description: "Vibrational position that creates perfect acoustic intimacy.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Tesla Coil", description: "Electrifying position that generates sparks of passionate energy.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Gravity Well", description: "Position so intense it bends space-time around your bodies.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Fibonacci", description: "Mathematical position following the golden ratio of intimate perfection.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Butterfly Effect", description: "Small changes in position create massive waves of pleasure.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Quantum Leap", description: "Position that transcends normal physical limitations.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Black Hole", description: "Inescapable position with infinite gravitational pull.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Aurora", description: "Shimmering position that creates dancing lights of sensation.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Wormhole", description: "Interdimensional position for instant travel to pleasure zones.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Supernova", description: "Explosive position that creates new stars of sensation.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Matrix", description: "Reality-bending position where anything is possible.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Möbius Strip", description: "Endless loop position with no beginning or end.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { name: "The Fractal", description: "Self-repeating position with infinite complexity and beauty.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { name: "The Perpetual Motion", description: "Energy-conserving position that never loses momentum.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { name: "The Zen Master", description: "Enlightened position that achieves perfect balance and harmony.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { name: "The Pandora's Box", description: "Position that unlocks all the mysteries of intimate pleasure.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" }
];

let isRolling = false;
let twoPlayerMode = false;

function togglePlayerMode() {
    const checkbox = document.getElementById('twoPlayerMode');
    const dice2Wrapper = document.getElementById('dice2Wrapper');
    
    twoPlayerMode = checkbox.checked;
    
    if (twoPlayerMode) {
        dice2Wrapper.style.display = 'block';
        dice2Wrapper.style.animation = 'fadeIn 0.5s ease-in-out';
    } else {
        dice2Wrapper.style.display = 'none';
    }
    
    // Reset display
    updateDisplay("NO FEAR BE BRAVE", "Press two-player mode if you're both excited");
}

function rollDice() {
    if (isRolling) return;
    
    isRolling = true;
    const rollButton = document.getElementById('rollButton');
    rollButton.disabled = true;
    rollButton.textContent = '🎲 Rolling... 🎲';
    
    // Start dice rolling animation (purely visual)
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    
    dice1.classList.add('rolling');
    if (twoPlayerMode) {
        dice2.classList.add('rolling');
    }
    
    // Clear previous results
    updateDisplay("🎲 Rolling dice... 🎲", "");
    
    // Simulate rolling delay
    setTimeout(() => {
        // Generate random dice values (just for visual effect)
        const die1Value = Math.floor(Math.random() * 6) + 1;
        const die2Value = twoPlayerMode ? Math.floor(Math.random() * 6) + 1 : null;
        
        // Stop rolling animation and show final faces
        dice1.classList.remove('rolling');
        if (twoPlayerMode) {
            dice2.classList.remove('rolling');
        }
        
        // Rotate dice to show the rolled values (visual only)
        rotateDiceToValue(dice1, die1Value);
        if (twoPlayerMode) {
            rotateDiceToValue(dice2, die2Value);
        }
        
        // Select completely random position from entire database
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * sexPositions.length);
            const position = sexPositions[randomIndex];
            
            // Display results
            updateDisplay(position.name, position.description, position.image);
            
            // Re-enable button
            rollButton.disabled = false;
            rollButton.textContent = '🎲 Roll Again 🎲';
            isRolling = false;
        }, 500);
        
    }, 2000); // 2 second rolling animation
}

function rotateDiceToValue(dice, value) {
    // Dice face rotations to show specific numbers (visual only)
    const rotations = {
        1: 'rotateX(0deg) rotateY(0deg)',      // front
        2: 'rotateX(0deg) rotateY(180deg)',    // back  
        3: 'rotateX(0deg) rotateY(90deg)',     // right
        4: 'rotateX(0deg) rotateY(-90deg)',    // left
        5: 'rotateX(-90deg) rotateY(0deg)',    // top
        6: 'rotateX(90deg) rotateY(0deg)'      // bottom
    };
    
    dice.style.transform = rotations[value];
}

function updateDisplay(name, description, imageUrl = null) {
    document.getElementById('positionName').textContent = name;
    document.getElementById('positionDescription').textContent = description;
    
    const imageElement = document.getElementById('positionImage');
    if (imageUrl) {
        imageElement.src = imageUrl;
        imageElement.alt = name;
        imageElement.style.display = 'block';
    } else {
        imageElement.style.display = 'none';
    }
}

// Initialize display
updateDisplay("NO FEAR BE BRAVE", "Press two-player mode if you're both excited");

// Add some visual effects
document.addEventListener('DOMContentLoaded', function() {
    const diceElements = document.querySelectorAll('.dice');
    
    diceElements.forEach(dice => {
        dice.addEventListener('mouseenter', function() {
            if (!isRolling) {
                this.style.transform += ' scale(1.1)';
            }
        });
        
        dice.addEventListener('mouseleave', function() {
            if (!isRolling) {
                this.style.transform = this.style.transform.replace(' scale(1.1)', '');
            }
        });
    });
});
