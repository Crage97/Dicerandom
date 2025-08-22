// Enhanced comprehensive sex positions database with difficulty levels and emotions
const sexPositions = [
    // COLD Level - Basic & Easy Positions
    { 
        name: "Missionary", 
        description: "The classic intimate position offering deep connection and eye contact.", 
        howTo: "Partner A: Lie on back with legs slightly apart, knees can be bent. Partner B: Position on top, supporting weight on forearms, chest-to-chest contact with Partner A.",
        difficulty: "COLD",
        emotion: "Romantic"
    },
    { 
        name: "Spooning", 
        description: "Side-by-side intimate position perfect for slow, tender moments.", 
        howTo: "Partner A: Lie on side. Partner B: Lie behind Partner A on same side, body curved to match Partner A's shape, arm around waist.",
        difficulty: "COLD",
        emotion: "Tender"
    },
    { 
        name: "Cowgirl Basic", 
        description: "Simple partner on top position allowing control of rhythm and depth.", 
        howTo: "Partner A: Lie flat on back. Partner B: Straddle Partner A facing forward, knees on either side of torso, hands on chest for balance.",
        difficulty: "COLD",
        emotion: "Empowering"
    },
    { 
        name: "Side by Side", 
        description: "Comfortable face-to-face position with minimal effort required.", 
        howTo: "Partner A: Lie on side. Partner B: Lie on side facing Partner A, legs intertwined, maintaining eye contact.",
        difficulty: "COLD",
        emotion: "Intimate"
    },
    { 
        name: "Sitting Embrace", 
        description: "Simple sitting position for deep emotional connection.", 
        howTo: "Partner A: Sit on bed with legs extended. Partner B: Sit on Partner A's lap facing them, legs wrapped around waist.",
        difficulty: "COLD",
        emotion: "Connected"
    },

    // MID COLD Level - Slightly More Complex
    { 
        name: "Doggy Style", 
        description: "Rear-entry position for deep penetration and primal connection.", 
        howTo: "Partner A: Position on hands and knees, back naturally arched. Partner B: Kneel behind, hands on Partner A's hips or lower back.",
        difficulty: "MID COLD",
        emotion: "Passionate"
    },
    { 
        name: "Reverse Cowgirl", 
        description: "Top position facing away for different angles and visual stimulation.", 
        howTo: "Partner A: Lie on back. Partner B: Straddle Partner A facing toward feet, hands on Partner A's thighs or bed for support.",
        difficulty: "MID COLD",
        emotion: "Adventurous"
    },
    { 
        name: "The Butterfly", 
        description: "Edge position for optimal angles and deep connection.", 
        howTo: "Partner A: Lie on back at edge of bed, hips at the edge. Partner B: Stand between Partner A's legs, supporting thighs.",
        difficulty: "MID COLD",
        emotion: "Exciting"
    },
    { 
        name: "Standing Missionary", 
        description: "Upright version of the classic with added thrill and challenge.", 
        howTo: "Partner A: Stand with back against wall, legs slightly apart. Partner B: Stand facing Partner A, supporting Partner A's thighs.",
        difficulty: "MID COLD",
        emotion: "Spontaneous"
    },
    { 
        name: "The Chair", 
        description: "Furniture-assisted position for comfort and new angles.", 
        howTo: "Partner A: Sit on sturdy chair. Partner B: Straddle Partner A, facing forward or backward, using chair arms for support.",
        difficulty: "MID COLD",
        emotion: "Playful"
    },

    // WARM Level - Moderate Complexity
    { 
        name: "The Lotus", 
        description: "Spiritual sitting position promoting deep intimacy and connection.", 
        howTo: "Partner A: Sit cross-legged. Partner B: Sit on Partner A's lap facing them, legs wrapped around Partner A's waist.",
        difficulty: "WARM",
        emotion: "Spiritual"
    },
    { 
        name: "Side Straddle", 
        description: "Modified spooning with more active movement.", 
        howTo: "Partner A: Lie on side, lift top leg up. Partner B: Position behind in spooning, with one leg between Partner A's legs.",
        difficulty: "WARM",
        emotion: "Creative"
    },
    { 
        name: "The Wheelbarrow", 
        description: "Playful position requiring arm strength and balance.", 
        howTo: "Partner A: Support upper body on hands, like pushup position. Partner B: Hold Partner A's legs/hips from behind.",
        difficulty: "WARM",
        emotion: "Playful"
    },
    { 
        name: "The Tabletop", 
        description: "Using furniture for height variation and support.", 
        howTo: "Partner A: Lie on back on table/surface. Partner B: Stand at edge, Partner A's legs over Partner B's shoulders.",
        difficulty: "WARM",
        emotion: "Daring"
    },
    { 
        name: "The Seashell", 
        description: "Flexible position for deep penetration and intimacy.", 
        howTo: "Partner A: Lie on back, pull knees toward chest. Partner B: Kneel close, leaning forward over Partner A's folded position.",
        difficulty: "WARM",
        emotion: "Intense"
    },
    { 
        name: "Standing Doggy", 
        description: "Vertical rear-entry against a surface for spontaneous encounters.", 
        howTo: "Partner A: Stand leaning forward against wall or furniture. Partner B: Stand behind, adjusting height as needed.",
        difficulty: "WARM",
        emotion: "Spontaneous"
    },
    { 
        name: "The T-Square", 
        description: "Perpendicular position creating unique angles.", 
        howTo: "Partner A: Lie on back. Partner B: Lie on side perpendicular to Partner A, creating a T-shape.",
        difficulty: "WARM",
        emotion: "Curious"
    },

    // MID WARM Level - Getting More Advanced
    { 
        name: "The Pretzel", 
        description: "Complex intertwining position for adventurous couples.", 
        howTo: "Partner A: Lie on side, top leg bent across body. Partner B: Position perpendicular, one leg under and one over Partner A's legs.",
        difficulty: "MID WARM",
        emotion: "Adventurous"
    },
    { 
        name: "The Bridge", 
        description: "Athletic position requiring flexibility and core strength.", 
        howTo: "Partner A: Lie on back, lift into bridge pose using hands and feet. Partner B: Kneel between Partner A's legs, supporting lower back.",
        difficulty: "MID WARM",
        emotion: "Athletic"
    },
    { 
        name: "Lifted Standing", 
        description: "Full lift position requiring strength and trust.", 
        howTo: "Partner A: Wrap legs around Partner B's waist, arms around neck. Partner B: Support Partner A's thighs/buttocks, back against wall optional.",
        difficulty: "MID WARM",
        emotion: "Trusting"
    },
    { 
        name: "The Swan", 
        description: "Elegant position with arched back and graceful lines.", 
        howTo: "Partner A: Kneel and lean forward, arms extended, back arched. Partner B: Kneel behind, hands on Partner A's hips.",
        difficulty: "MID WARM",
        emotion: "Elegant"
    },
    { 
        name: "The Spider", 
        description: "Sitting position with both partners leaning back.", 
        howTo: "Both partners: Sit facing each other, lean back on hands for support, legs interlocked.",
        difficulty: "MID WARM",
        emotion: "Balanced"
    },
    { 
        name: "The Accordion", 
        description: "Flexible position with alternating compression and extension.", 
        howTo: "Partner A: Lie on back, knees bent. Partner B: Position on top, moving between compressed and extended positions.",
        difficulty: "MID WARM",
        emotion: "Dynamic"
    },

    // HOT Level - Most Complex & Advanced
    { 
        name: "The Superhero", 
        description: "Flying position requiring exceptional core strength.", 
        howTo: "Partner A: Lie face down. Partner B: Lie on top with arms extended forward, supporting some weight while 'flying'.",
        difficulty: "HOT",
        emotion: "Powerful"
    },
    { 
        name: "The Gymnast", 
        description: "Extremely flexible position for the athletically inclined.", 
        howTo: "Partner A: Move into advanced flexible position (splits, etc.). Partner B: Position to complement Partner A's flexibility safely.",
        difficulty: "HOT",
        emotion: "Athletic"
    },
    { 
        name: "The Warrior", 
        description: "Standing position showcasing exceptional strength and balance.", 
        howTo: "Partner A: Stand on one leg, other leg lifted high. Partner B: Support lifted leg while standing, demonstrating core strength.",
        difficulty: "HOT",
        emotion: "Powerful"
    },
    { 
        name: "The Acrobat", 
        description: "Advanced position requiring circus-level flexibility and strength.", 
        howTo: "Partner A: Achieve advanced contortion position. Partner B: Position carefully to maintain Partner A's pose while connecting.",
        difficulty: "HOT",
        emotion: "Extreme"
    },
    { 
        name: "The Phoenix", 
        description: "Complex rising position that requires perfect timing and balance.", 
        howTo: "Partner A: Start lying down, gradually rise to standing during encounter. Partner B: Adapt and move with Partner A's transition.",
        difficulty: "HOT",
        emotion: "Transformative"
    },

    // Additional Wikipedia-Inspired Positions
    { 
        name: "The 69", 
        description: "Mutual oral pleasure position for simultaneous satisfaction.", 
        howTo: "Partner A: Lie on back. Partner B: Position on top facing opposite direction, heads at each other's genitals.",
        difficulty: "MID COLD",
        emotion: "Mutual"
    },
    { 
        name: "The Yab-Yum", 
        description: "Sacred tantric position for spiritual and physical connection.", 
        howTo: "Partner A: Sit with legs crossed. Partner B: Sit on Partner A's lap, wrapping legs around back, foreheads touching.",
        difficulty: "WARM",
        emotion: "Spiritual"
    },
    { 
        name: "The Anvil", 
        description: "Deep penetration position with legs over shoulders.", 
        howTo: "Partner A: Lie on back, legs over Partner B's shoulders. Partner B: Kneel upright, supporting Partner A's legs.",
        difficulty: "MID WARM",
        emotion: "Intense"
    },
    { 
        name: "The Piledriver", 
        description: "Advanced inverted position requiring flexibility.", 
        howTo: "Partner A: Lie on back with shoulders on ground, hips raised high. Partner B: Position carefully above, supporting Partner A's position.",
        difficulty: "HOT",
        emotion: "Extreme"
    },
    { 
        name: "The Scissors", 
        description: "Interlocking legs position for mutual control and comfort.", 
        howTo: "Partner A: Lie on side. Partner B: Lie on side facing Partner A, legs interlocked like scissors for intimate fit.",
        difficulty: "WARM",
        emotion: "Harmonious"
    },
    { 
        name: "The Coital Alignment", 
        description: "Modified missionary focusing on clitoral stimulation.", 
        howTo: "Partner A: Lie on back. Partner B: Position on top but higher up, creating grinding contact rather than thrusting.",
        difficulty: "MID COLD",
        emotion: "Focused"
    },
    { 
        name: "The Amazon", 
        description: "Powerful position with receiving partner in control.", 
        howTo: "Partner A: Lie on back with knees up. Partner B: Squat over Partner A, feet flat, controlling all movement.",
        difficulty: "MID WARM",
        emotion: "Dominant"
    },
    { 
        name: "The Mantis", 
        description: "Crouching position inspired by the praying mantis.", 
        howTo: "Partner A: Crouch in mantis-like position. Partner B: Position behind in complementary crouching stance.",
        difficulty: "WARM",
        emotion: "Primal"
    },
    { 
        name: "The Helicopter", 
        description: "Rotating position for adventurous couples.", 
        howTo: "Partner A: Lie on back. Partner B: Position on top, then slowly rotate 360 degrees while maintaining connection.",
        difficulty: "MID WARM",
        emotion: "Adventurous"
    },
    { 
        name: "The Pretzel Dip", 
        description: "Advanced pretzel variation with deeper angle.", 
        howTo: "Partner A: Lie on side with complex leg positioning. Partner B: Navigate the pretzel configuration for maximum depth.",
        difficulty: "HOT",
        emotion: "Complex"
    },
    { 
        name: "The Magic Mountain", 
        description: "Elevated position using pillows and positioning for optimal angles.", 
        howTo: "Partner A: Lie with hips elevated on pillows. Partner B: Position to take advantage of the elevated angle.",
        difficulty: "MID WARM",
        emotion: "Elevated"
    },
    { 
        name: "The Reverse Plank", 
        description: "Athletic position requiring core strength from both partners.", 
        howTo: "Partner A: Hold reverse plank position. Partner B: Position to connect while Partner A maintains plank.",
        difficulty: "HOT",
        emotion: "Athletic"
    },
    { 
        name: "The Kneeling Wheelbarrow", 
        description: "Modified wheelbarrow from kneeling position.", 
        howTo: "Partner A: Start on knees, lean forward on hands. Partner B: Lift Partner A's hips while both remain on knees.",
        difficulty: "WARM",
        emotion: "Playful"
    },
    { 
        name: "The Cradle Rock", 
        description: "Gentle rocking position with Partner A cradled.", 
        howTo: "Partner A: Curl up in Partner B's lap. Partner B: Hold Partner A in cradling position, gentle rocking motion.",
        difficulty: "COLD",
        emotion: "Nurturing"
    },
    { 
        name: "The Fusion", 
        description: "Complex position where bodies seem to merge into one.", 
        howTo: "Both partners: Intertwine limbs and bodies in complex configuration, creating seamless fusion of forms.",
        difficulty: "HOT",
        emotion: "Unity"
    }
];

// Difficulty level colors and descriptions
const difficultyInfo = {
    "COLD": { color: "#87CEEB", description: "Beginner - Easy and comfortable" },
    "MID COLD": { color: "#90EE90", description: "Easy-Moderate - Slightly more complex" },
    "WARM": { color: "#FFD700", description: "Moderate - Requires some flexibility" },
    "MID WARM": { color: "#FFA500", description: "Moderate-Advanced - More challenging" },
    "HOT": { color: "#FF4500", description: "Advanced - Requires skill and flexibility" }
};

// Emotion categories
const emotionCategories = [
    "Romantic", "Tender", "Passionate", "Adventurous", "Playful", "Spiritual", 
    "Intense", "Creative", "Athletic", "Spontaneous", "Intimate", "Daring",
    "Empowering", "Connected", "Exciting", "Curious", "Trusting", "Elegant",
    "Balanced", "Dynamic", "Powerful", "Extreme", "Transformative", "Mutual",
    "Focused", "Dominant", "Primal", "Complex", "Elevated", "Nurturing", "Unity", "Harmonious"
];

let isGenerating = false;

function generatePosition() {
    if (isGenerating) return;
    
    isGenerating = true;
    const generateButton = document.getElementById('generateButton');
    generateButton.disabled = true;
    generateButton.textContent = '🔥 Generating... 🔥';
    
    // Clear previous results
    updateDisplay("🔥 Generating new position... 🔥", "", null, null, null);
    
    // Simulate generation delay for excitement
    setTimeout(() => {
        // Select completely random position from entire database
        const randomIndex = Math.floor(Math.random() * sexPositions.length);
        const position = sexPositions[randomIndex];
        
        // Display results with new attributes
        const instructions = position.howTo || "Partner A: Find a comfortable base position. Partner B: Align and position your body to complement Partner A's positioning. Both partners: Communicate and adjust for optimal comfort and connection.";
        updateDisplay(position.name, position.description, instructions, position.difficulty, position.emotion);
        
        // Re-enable button
        generateButton.disabled = false;
        generateButton.textContent = '🔥 NERVE 🔥';
        isGenerating = false;
    }, 1500); // 1.5 second generation time
}

function updateDisplay(name, description, instructions = null, difficulty = null, emotion = null) {
    document.getElementById('positionName').textContent = name;
    document.getElementById('positionDescription').textContent = description;
    
    const instructionsElement = document.getElementById('positionInstructions');
    const instructionsContent = document.getElementById('instructionsContent');
    if (instructions) {
        instructionsContent.textContent = instructions;
        instructionsElement.style.display = 'block';
    } else {
        instructionsElement.style.display = 'none';
    }
    
    // Update difficulty display
    const difficultyElement = document.getElementById('difficultyLevel');
    if (difficulty && difficultyElement) {
        const diffInfo = difficultyInfo[difficulty];
        difficultyElement.textContent = `${difficulty} - ${diffInfo.description}`;
        difficultyElement.style.color = diffInfo.color;
        difficultyElement.style.display = 'block';
    } else if (difficultyElement) {
        difficultyElement.style.display = 'none';
    }
    
    // Update emotion display
    const emotionElement = document.getElementById('emotionCategory');
    if (emotion && emotionElement) {
        emotionElement.textContent = `Emotion: ${emotion}`;
        emotionElement.style.display = 'block';
    } else if (emotionElement) {
        emotionElement.style.display = 'none';
    }
}

// Initialize display
updateDisplay("NO FEAR BE BRAVE", "Random Adult Education");

// Add visual effects to button
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    
    generateButton.addEventListener('mouseenter', function() {
        if (!isGenerating) {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        }
    });
    
    generateButton.addEventListener('mouseleave', function() {
        if (!isGenerating) {
            this.style.transform = 'translateY(0) scale(1)';
        }
    });
});
