// Comprehensive sex positions database based on popular guides and SheKnows recommendations
const sexPositions = [
    // Classic & Essential Positions
    { name: "Missionary", description: "The classic intimate position offering deep connection and eye contact.", howTo: "Partner A: Lie on back with legs slightly apart, knees can be bent. Partner B: Position on top, supporting weight on forearms, chest-to-chest contact with Partner A." },
    { name: "Cowgirl", description: "Partner on top position allowing complete control of rhythm and depth.", howTo: "Partner A: Lie flat on back. Partner B: Straddle Partner A facing forward, knees on either side of torso, hands on chest or bed for balance." },
    { name: "Reverse Cowgirl", description: "Top position facing away for different angles and visual stimulation.", howTo: "Partner A: Lie on back. Partner B: Straddle Partner A facing toward feet, hands on Partner A's thighs or bed for support." },
    { name: "Doggy Style", description: "Rear-entry position for deep penetration and primal connection.", howTo: "Partner A: Position on hands and knees, back naturally arched. Partner B: Kneel behind, hands on Partner A's hips or lower back." },
    { name: "Spooning", description: "Side-by-side intimate position perfect for slow, tender moments.", howTo: "Partner A: Lie on side. Partner B: Lie behind Partner A on same side, body curved to match Partner A's shape, arm around waist." },
    
    // Standing Positions
    { name: "Standing Missionary", description: "Upright version of the classic with added thrill and challenge.", howTo: "Partner A: Stand with back against wall, legs slightly apart. Partner B: Stand facing Partner A, supporting Partner A's thighs." },
    { name: "Standing Doggy", description: "Vertical rear-entry against a surface for spontaneous encounters.", howTo: "Partner A: Stand leaning forward against wall or furniture. Partner B: Stand behind, adjusting height as needed." },
    { name: "Lifted Standing", description: "Full lift position requiring strength and trust.", howTo: "Partner A: Wrap legs around Partner B's waist, arms around neck. Partner B: Support Partner A's thighs/buttocks, back against wall optional." },
    
    // Sitting Positions
    { name: "The Lotus", description: "Spiritual sitting position promoting deep intimacy and connection.", howTo: "Partner A: Sit cross-legged. Partner B: Sit on Partner A's lap facing them, legs wrapped around Partner A's waist." },
    { name: "The Chair", description: "Furniture-assisted position for comfort and new angles.", howTo: "Partner A: Sit on sturdy chair. Partner B: Straddle Partner A, facing forward or backward, using chair arms for support." },
    { name: "Reverse Lotus", description: "Sitting position with partner facing away for different sensations.", howTo: "Partner A: Sit with legs extended. Partner B: Sit between Partner A's legs facing away, leaning back against Partner A's chest." },
    
    // Advanced & Flexible Positions
    { name: "The Bridge", description: "Athletic position requiring flexibility and core strength.", howTo: "Partner A: Lie on back, lift into bridge pose using hands and feet. Partner B: Kneel between Partner A's legs, supporting lower back." },
    { name: "The Pretzel", description: "Complex intertwining position for adventurous couples.", howTo: "Partner A: Lie on side, top leg bent across body. Partner B: Position perpendicular, one leg under and one over Partner A's legs." },
    { name: "The Wheelbarrow", description: "Playful position requiring arm strength and balance.", howTo: "Partner A: Support upper body on hands, like pushup position. Partner B: Hold Partner A's legs/hips from behind." },
    { name: "The Butterfly", description: "Edge position for optimal angles and deep connection.", howTo: "Partner A: Lie on back at edge of bed, hips at the edge. Partner B: Stand between Partner A's legs, supporting thighs." },
    
    // Side Positions
    { name: "Side Straddle", description: "Modified spooning with more active movement.", howTo: "Partner A: Lie on side, lift top leg up. Partner B: Position behind in spooning, with one leg between Partner A's legs." },
    { name: "Scissor Position", description: "Interlocking legs position for mutual control.", howTo: "Partner A: Lie on side. Partner B: Lie on side facing Partner A, legs interlocked like scissors." },
    { name: "The T-Square", description: "Perpendicular position creating unique angles.", howTo: "Partner A: Lie on back. Partner B: Lie on side perpendicular to Partner A, creating a T-shape." },
    
    // Intimate & Slow Positions
    { name: "The Yab-Yum", description: "Tantric position for spiritual and physical connection.", howTo: "Partner A: Sit with legs crossed. Partner B: Sit on Partner A's lap, wrapping legs around back, foreheads touching." },
    { name: "The Seashell", description: "Flexible position for deep penetration and intimacy.", howTo: "Partner A: Lie on back, pull knees toward chest. Partner B: Kneel close, leaning forward over Partner A's folded position." },
    { name: "The Cradle", description: "Nurturing position emphasizing comfort and closeness.", howTo: "Partner A: Lie on back. Partner B: Lie on top at an angle, head resting on Partner A's shoulder, bodies at slight angle." },
    
    // Kama Sutra Inspired
    { name: "The Lotus Blossom", description: "Variation of lotus with gentle rocking motion.", howTo: "Partner A: Sit with legs folded. Partner B: Sit on lap facing Partner A, legs around waist, gentle rocking motion together." },
    { name: "The Tigress", description: "Rear-entry position with Partner A's chest down.", howTo: "Partner A: Lie face down, hips slightly elevated. Partner B: Lie on top from behind, supporting weight on arms." },
    { name: "The Swan", description: "Elegant position with arched back and graceful lines.", howTo: "Partner A: Kneel and lean forward, arms extended, back arched. Partner B: Kneel behind, hands on Partner A's hips." },
    
    // Playful & Fun Positions
    { name: "The Rocking Horse", description: "Rhythmic position with Partner on top controlling motion.", howTo: "Partner A: Lie on back. Partner B: Straddle in cowgirl but lean forward, hands on Partner A's chest, rocking motion." },
    { name: "The Spider", description: "Sitting position with both partners leaning back.", howTo: "Both partners: Sit facing each other, lean back on hands for support, legs interlocked." },
    { name: "The X-Factor", description: "Creative position with bodies forming an X shape.", howTo: "Partner A: Lie diagonally on bed. Partner B: Position perpendicularly across Partner A, creating X formation." },
    
    // Oral Positions
    { name: "The 69", description: "Mutual oral pleasure position for simultaneous satisfaction.", howTo: "Partner A: Lie on back. Partner B: Position on top facing opposite direction, heads at each other's genitals." },
    { name: "Side 69", description: "Comfortable variation of 69 lying on sides.", howTo: "Both partners: Lie on sides facing each other, heads positioned for mutual oral contact." },
    
    // Edge & Surface Positions
    { name: "The Tabletop", description: "Using furniture for height variation and support.", howTo: "Partner A: Lie on back on table/surface. Partner B: Stand at edge, Partner A's legs over Partner B's shoulders." },
    { name: "The Countertop", description: "Kitchen counter position for spontaneous encounters.", howTo: "Partner A: Sit on counter edge. Partner B: Stand between Partner A's legs, Partner A wraps legs around waist." },
    { name: "The Desk Job", description: "Office-inspired position using desk or surface.", howTo: "Partner A: Lean over desk/surface. Partner B: Stand behind, Partner A's hands supporting on surface." },
    
    // Shower & Bathroom Positions
    { name: "Shower Standing", description: "Steamy position for bathroom encounters.", howTo: "Partner A: Stand facing shower wall. Partner B: Stand behind, one hand on wall for support, careful footing." },
    { name: "Bathtub Sitting", description: "Water-based sitting position for relaxed intimacy.", howTo: "Partner A: Sit in tub. Partner B: Sit on Partner A's lap facing them, water providing buoyancy." },
    
    // Outdoor Inspired
    { name: "The Picnic", description: "Ground-level position inspired by outdoor adventures.", howTo: "Partner A: Lie on back on blanket/soft surface. Partner B: Kneel between Partner A's legs, nature setting optional." },
    { name: "The Hammock", description: "Swaying position for gentle, rhythmic motion.", howTo: "Partner A: Lie in hammock. Partner B: Stand beside hammock, Partner A's legs over edge, swaying motion." },
    
    // Tantric & Spiritual
    { name: "The Sacred Spot", description: "Tantric position focusing on energy exchange.", howTo: "Partner A: Lie on back with pillow under hips. Partner B: Kneel upright, hands on Partner A's heart chakra area." },
    { name: "The Meditation", description: "Mindful position for present-moment awareness.", howTo: "Partner A: Sit in meditation pose. Partner B: Sit on lap facing away, both focusing on breath and sensation." },
    
    // Creative & Unique
    { name: "The Accordion", description: "Flexible position with alternating compression and extension.", howTo: "Partner A: Lie on back, knees bent. Partner B: Position on top, moving between compressed and extended positions." },
    { name: "The Pendulum", description: "Swaying motion position for rhythmic pleasure.", howTo: "Partner A: Lie on back near bed edge. Partner B: Stand, creating pendulum-like swaying motion." },
    { name: "The Puzzle Piece", description: "Interlocking position where bodies fit perfectly together.", howTo: "Partner A: Lie on side in curved position. Partner B: Fit behind in complementary curve, like puzzle pieces." },
    { name: "The Time Warp", description: "Position that makes time stand still through intense connection.", howTo: "Partner A: Sit upright. Partner B: Sit facing Partner A, legs wrapped around, maintaining eye contact throughout." },
    
    // Strength & Athletic Positions
    { name: "The Superhero", description: "Flying position requiring core strength.", howTo: "Partner A: Lie face down. Partner B: Lie on top with arms extended forward, supporting some weight." },
    { name: "The Warrior", description: "Standing position showcasing strength and power.", howTo: "Partner A: Stand on one leg, other leg lifted. Partner B: Support lifted leg while standing, showing strength." },
    { name: "The Gymnast", description: "Flexible position for the athletically inclined.", howTo: "Partner A: Move into flexible position (splits, etc.). Partner B: Position to complement Partner A's flexibility." },
    
    // Comfort & Relaxation
    { name: "The Sunday Morning", description: "Lazy, comfortable position for relaxed intimacy.", howTo: "Partner A: Lie on side in comfortable position. Partner B: Spoon from behind, minimal effort, maximum comfort." },
    { name: "The Afternoon Delight", description: "Midday position perfect for spontaneous moments.", howTo: "Partner A: Recline comfortably. Partner B: Position for easy access while both remain relaxed." },
    { name: "The Midnight Snack", description: "Quick position for late-night encounters.", howTo: "Partner A: Bend over bed edge slightly. Partner B: Stand behind for quick, satisfying connection." },
    
    // Romantic & Emotional
    { name: "The Love Letter", description: "Position focused on emotional connection and communication.", howTo: "Partner A: Lie comfortably. Partner B: Position for easy eye contact and whispered sweet words." },
    { name: "The First Kiss", description: "Tender position reminiscent of early relationship moments.", howTo: "Partner A: Sit upright. Partner B: Sit on lap facing Partner A, focusing on gentle kisses and caresses." },
    { name: "The Anniversary", description: "Special position for celebrating your connection.", howTo: "Partner A: Lie in favorite position. Partner B: Position to recreate your most memorable intimate moment together." }
];

let isGenerating = false;

function generatePosition() {
    if (isGenerating) return;
    
    isGenerating = true;
    const generateButton = document.getElementById('generateButton');
    generateButton.disabled = true;
    generateButton.textContent = '🔥 Generating... 🔥';
    
    // Clear previous results
    updateDisplay("🔥 Generating new position... 🔥", "");
    
    // Simulate generation delay for excitement
    setTimeout(() => {
        // Select completely random position from entire database
        const randomIndex = Math.floor(Math.random() * sexPositions.length);
        const position = sexPositions[randomIndex];
        
        // Display results
        const instructions = position.howTo || "Partner A: Find a comfortable base position. Partner B: Align and position your body to complement Partner A's positioning. Both partners: Communicate and adjust for optimal comfort and connection.";
        updateDisplay(position.name, position.description, instructions);
        
        // Re-enable button
        generateButton.disabled = false;
        generateButton.textContent = '🔥 Generate Another 🔥';
        isGenerating = false;
    }, 1500); // 1.5 second generation time
}

function updateDisplay(name, description, instructions = null) {
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
}

// Initialize display
updateDisplay("NO FEAR BE BRAVE", "Click the button below to discover a new position!");

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
