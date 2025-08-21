// Sex positions database with Wikipedia references and romantic images
const sexPositions = [
    // Single die positions (1-6)
    { dice: [1], name: "Missionary", description: "Classic face-to-face position with intimate eye contact. One partner lies on their back while the other lies on top.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { dice: [2], name: "Doggy Style", description: "Rear-entry position where one partner bends over while the other enters from behind, allowing for deep penetration.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { dice: [3], name: "Cowgirl", description: "Woman on top position where the receiving partner straddles and controls the rhythm and depth.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { dice: [4], name: "Spooning", description: "Side-by-side position where partners lie like spoons, intimate and comfortable for extended sessions.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { dice: [5], name: "Standing", description: "Upright position that can be done against a wall or free-standing for adventurous couples.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { dice: [6], name: "The Lotus", description: "Sitting position where partners face each other with legs wrapped around, perfect for intimacy and connection.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    
    // Two dice combinations (2-12)
    { dice: [1, 1], name: "The Butterfly", description: "Partner lies on edge of bed/surface with hips positioned for optimal angle and comfort.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { dice: [1, 2], name: "Reverse Cowgirl", description: "Woman on top but facing away, allowing for different sensations and visual appeal.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { dice: [1, 3], name: "The Bridge", description: "Advanced position requiring flexibility where one partner creates a bridge arch.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { dice: [1, 4], name: "Side Straddle", description: "Creative side position combining elements of spooning with more active movement.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { dice: [1, 5], name: "The Pretzel Dip", description: "Complex position combining multiple angles for varied sensations and deep connection.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { dice: [1, 6], name: "The Seashell", description: "Flexible position where receiving partner's legs are positioned for maximum intimacy.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },

    { dice: [2, 2], name: "The Tabletop", description: "Partner positioned on a table or elevated surface for height variation and comfort.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { dice: [2, 3], name: "The T-Bone", description: "Perpendicular position creating a T-shape for unique angles and sensations.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { dice: [2, 4], name: "The Chair", description: "Utilizes furniture for support and new angles of intimacy and comfort.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { dice: [2, 5], name: "The X Factor", description: "Crossing position that creates intense intimacy through unique body positioning.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { dice: [2, 6], name: "The Lazy Dog", description: "Relaxed variation of doggy style with more comfort for extended sessions.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },

    { dice: [3, 3], name: "The Flatiron", description: "Lying flat position with legs closed for increased tightness and sensation.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { dice: [3, 4], name: "Face Off", description: "Intense eye contact position while seated, perfect for emotional connection.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { dice: [3, 5], name: "The Wheelbarrow", description: "Adventurous position requiring strength and balance for the thrill-seeking couple.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },
    { dice: [3, 6], name: "The Crab Walk", description: "Playful and challenging position that requires coordination and flexibility.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },

    { dice: [4, 4], name: "The Scoop Me Up", description: "Comfortable spooning variation with enhanced intimacy and ease of movement.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },
    { dice: [4, 5], name: "The Standing Split", description: "Advanced standing position requiring flexibility and balance for adventurous partners.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" },
    { dice: [4, 6], name: "The Cuddle Huddle", description: "Intimate position focused on closeness and emotional connection during intimacy.", image: "https://images.pexels.com/photos/16251532/pexels-photo-16251532.jpeg" },

    { dice: [5, 5], name: "The Pinball Wizard", description: "Dynamic position with lots of movement and energy for playful couples.", image: "https://images.pexels.com/photos/6899789/pexels-photo-6899789.jpeg" },
    { dice: [5, 6], name: "The Hoverboard", description: "Challenging position that seems to defy gravity, requiring strength and coordination.", image: "https://images.pexels.com/photos/12675574/pexels-photo-12675574.jpeg" },

    { dice: [6, 6], name: "The Magic Mountain", description: "Ultimate challenge position combining flexibility, strength, and adventure for experienced couples.", image: "https://images.pexels.com/photos/5851702/pexels-photo-5851702.jpeg" }
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
    updateDisplay("Roll the dice to discover your position!", "");
}

function rollDice() {
    if (isRolling) return;
    
    isRolling = true;
    const rollButton = document.getElementById('rollButton');
    rollButton.disabled = true;
    rollButton.textContent = '🎲 Rolling... 🎲';
    
    // Start dice rolling animation
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    
    dice1.classList.add('rolling');
    if (twoPlayerMode) {
        dice2.classList.add('rolling');
    }
    
    // Clear previous results
    updateDisplay("🎲 Rolling dice... 🎲", "");
    document.getElementById('diceValues').textContent = '';
    
    // Simulate rolling delay
    setTimeout(() => {
        // Generate random dice values
        const die1Value = Math.floor(Math.random() * 6) + 1;
        const die2Value = twoPlayerMode ? Math.floor(Math.random() * 6) + 1 : null;
        
        // Stop rolling animation and show final faces
        dice1.classList.remove('rolling');
        if (twoPlayerMode) {
            dice2.classList.remove('rolling');
        }
        
        // Rotate dice to show the rolled values
        rotateDiceToValue(dice1, die1Value);
        if (twoPlayerMode) {
            rotateDiceToValue(dice2, die2Value);
        }
        
        // Find matching position
        setTimeout(() => {
            const diceArray = twoPlayerMode ? [die1Value, die2Value].sort() : [die1Value];
            const position = findPosition(diceArray);
            
            // Display results
            updateDisplay(position.name, position.description, position.image);
            
            if (twoPlayerMode) {
                document.getElementById('diceValues').textContent = `🎲 Rolled: ${die1Value} & ${die2Value}`;
            } else {
                document.getElementById('diceValues').textContent = `🎲 Rolled: ${die1Value}`;
            }
            
            // Re-enable button
            rollButton.disabled = false;
            rollButton.textContent = '🎲 Roll Again 🎲';
            isRolling = false;
        }, 500);
        
    }, 2000); // 2 second rolling animation
}

function rotateDiceToValue(dice, value) {
    // Dice face rotations to show specific numbers
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

function findPosition(diceArray) {
    // Find exact match first
    const exactMatch = sexPositions.find(pos => 
        JSON.stringify(pos.dice.sort()) === JSON.stringify(diceArray)
    );
    
    if (exactMatch) {
        return exactMatch;
    }
    
    // If no exact match, find by sum for two dice
    if (diceArray.length === 2) {
        const sum = diceArray[0] + diceArray[1];
        const fallbackPositions = [
            { sum: 2, name: "Tender Connection", description: "A gentle and intimate position perfect for slow, romantic encounters." },
            { sum: 3, name: "Sweet Embrace", description: "Close body contact with emphasis on emotional connection and tenderness." },
            { sum: 4, name: "Playful Twist", description: "A fun variation that adds playfulness to your intimate moments." },
            { sum: 5, name: "Passionate Dance", description: "Rhythmic position that feels like dancing together in perfect harmony." },
            { sum: 6, name: "Deep Connection", description: "Position focused on creating profound intimacy and emotional bonding." },
            { sum: 7, name: "Lucky Seven", description: "The perfect balance of comfort and excitement for adventurous couples." },
            { sum: 8, name: "Infinity Loop", description: "Continuous movement creating an endless cycle of pleasure and connection." },
            { sum: 9, name: "Cloud Nine", description: "Elevated position that makes you feel like you're floating on cloud nine." },
            { sum: 10, name: "Perfect Ten", description: "The ideal combination of intimacy, comfort, and passion all in one." },
            { sum: 11, name: "Double Luck", description: "Adventurous position for couples who love to try new and exciting things." },
            { sum: 12, name: "Zodiac Peak", description: "The ultimate position combining all elements of passion, trust, and adventure." }
        ];
        
        const fallback = fallbackPositions.find(pos => pos.sum === sum);
        if (fallback) {
            return { name: fallback.name, description: fallback.description };
        }
    }
    
    // Ultimate fallback
    return { 
        name: "Surprise Position", 
        description: "Sometimes the best adventures come from the unexpected! Create your own unique position and make it special." 
    };
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
