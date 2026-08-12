const mathematicsData = {

    general: {

        "Algebra": [
            {
                formula: "(a + b)²",
                answer: "a² + 2ab + b²",
                prove:
`(a + b)²
= (a + b)(a + b)
= a(a + b) + b(a + b)
= a² + ab + ab + b²
= a² + 2ab + b²

Proved ✓`
            },

            {
                formula: "(a - b)²",
                answer: "a² - 2ab + b²",
                prove:
`(a - b)²
= (a - b)(a - b)
= a² - ab - ab + b²
= a² - 2ab + b²

Proved ✓`
            }
        ],

        "Arithmetic": [
            {
                formula: "Average",
                answer: "Average = Sum of values ÷ Number of values",
                prove: "Average is obtained by dividing the total sum by the number of values."
            }
        ],

        "Coordinate Geometry": [
            {
                formula: "Distance Formula",
                answer: "d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
                prove:
`Using the Pythagorean theorem:

d² = (x₂ - x₁)² + (y₂ - y₁)²

Therefore,

d = √[(x₂ - x₁)² + (y₂ - y₁)²]

Proved ✓`
            }
        ],

        "Fractions & Decimals": [
            {
                formula: "Fraction",
                answer: "Fraction = Numerator / Denominator",
                prove: "A fraction represents a part of a whole."
            }
        ],

        "Geometry": [
            {
                formula: "Area of Rectangle",
                answer: "Area = length × width",
                prove: "A rectangle is made of length × width equal square units."
            }
        ],

        "Percentage": [
            {
                formula: "Percentage",
                answer: "Percentage = (Part / Whole) × 100",
                prove: "Percentage expresses a quantity out of 100."
            }
        ]
    },


    intermediate: {

        "Algebra": [
            {
                formula: "(a + b)²",
                answer: "a² + 2ab + b²",
                prove:
`(a + b)²
= (a + b)(a + b)
= a(a + b) + b(a + b)
= a² + ab + ab + b²
= a² + 2ab + b²

Proved ✓`
            },

            {
                formula: "(a - b)²",
                answer: "a² - 2ab + b²",
                prove:
`(a - b)²
= (a - b)(a - b)
= a² - ab - ab + b²
= a² - 2ab + b²

Proved ✓`
            },

            {
                formula: "a² - b²",
                answer: "(a - b)(a + b)",
                prove:
`(a - b)(a + b)
= a² + ab - ab - b²
= a² - b²

Proved ✓`
            }
        ],

        "Coordinate Geometry": [
            {
                formula: "Distance Formula",
                answer: "d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
                prove: "Derived from the Pythagorean theorem."
            }
        ],

        "Introductory Calculus": [
            {
                formula: "Basic Limit",
                answer: "lim(x→a) f(x)",
                prove: "A limit describes the value approached by a function as x approaches a."
            }
        ],

        "Matrices & Determinants": [
            {
                formula: "2 × 2 Determinant",
                answer: "|A| = ad - bc",
                prove:
`For

A = [ a  b ]
    [ c  d ]

det(A) = ad - bc

Proved ✓`
            }
        ],

        "Probability": [
            {
                formula: "Probability",
                answer: "P(E) = Favorable outcomes / Total outcomes",
                prove: "Probability measures how likely an event is to occur."
            }
        ],

        "Sequences & Series": [
            {
                formula: "Arithmetic Sequence",
                answer: "aₙ = a + (n - 1)d",
                prove: "Each term increases by the common difference d."
            }
        ],

        "Statistics": [
            {
                formula: "Mean",
                answer: "Mean = Σx / n",
                prove: "The mean is the total of all observations divided by their number."
            }
        ],

        "Trigonometry": [
            {
                formula: "Pythagorean Identity",
                answer: "sin²θ + cos²θ = 1",
                prove:
`From the unit circle:

x² + y² = 1

Since x = cosθ and y = sinθ:

cos²θ + sin²θ = 1

Proved ✓`
            }
        ],

        "Vectors": [
            {
                formula: "Vector Magnitude",
                answer: "|v| = √(x² + y²)",
                prove: "Using the Pythagorean theorem."
            }
        ]
    },


    advanced: {

        "Advanced Algebra": [
            {
                formula: "(a + b)²",
                answer: "a² + 2ab + b²",
                prove:
`(a + b)²
= (a + b)(a + b)
= a² + ab + ab + b²
= a² + 2ab + b²

Proved ✓`
            },

            {
                formula: "(a - b)²",
                answer: "a² - 2ab + b²",
                prove:
`(a - b)²
= (a - b)(a - b)
= a² - ab - ab + b²
= a² - 2ab + b²

Proved ✓`
            },

            {
                formula: "(a + b)³",
                answer: "a³ + 3a²b + 3ab² + b³",
                prove:
`(a + b)³
= (a + b)(a + b)²
= (a + b)(a² + 2ab + b²)
= a³ + 3a²b + 3ab² + b³

Proved ✓`
            },

            {
                formula: "a³ + b³",
                answer: "(a + b)(a² - ab + b²)",
                prove:
`(a + b)(a² - ab + b²)
= a³ + b³

Proved ✓`
            },

            {
                formula: "a³ - b³",
                answer: "(a - b)(a² + ab + b²)",
                prove:
`(a - b)(a² + ab + b²)
= a³ - b³

Proved ✓`
            }
        ],

        "Base Changer": [
            {
                formula: "Base Conversion",
                answer: "Use the Base Changer system.",
                prove: "Open Base Changer to convert numbers between bases 2–36."
            }
        ],

        "Complex Numbers": [
            {
                formula: "i²",
                answer: "i² = -1",
                prove:
`By definition of the imaginary unit:

i = √(-1)

Therefore:

i² = -1

Proved ✓`
            }
        ],

        "Coordinate Geometry": [
            {
                formula: "Distance Formula",
                answer: "d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
                prove: "Derived using the Pythagorean theorem."
            }
        ],

        "Differentiation": [
            {
                formula: "Power Rule",
                answer: "d/dx (xⁿ) = nxⁿ⁻¹",
                prove:
`Let y = xⁿ.

Differentiating:

dy/dx = nxⁿ⁻¹

Proved ✓`
            }
        ],

        "Integration": [
            {
                formula: "Power Rule",
                answer: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ -1",
                prove:
`Differentiate:

d/dx [xⁿ⁺¹/(n+1)]
= xⁿ

Therefore:

∫xⁿ dx = xⁿ⁺¹/(n+1) + C

Proved ✓`
            }
        ],

        "Limits": [
            {
                formula: "Basic Limit",
                answer: "lim(x→a) f(x)",
                prove: "A limit represents the value approached by a function."
            }
        ],

        "Matrices": [
            {
                formula: "2 × 2 Determinant",
                answer: "|A| = ad - bc",
                prove:
`For

A = [ a  b ]
    [ c  d ]

det(A) = ad - bc

Proved ✓`
            }
        ],

        "Trigonometry": [
            {
                formula: "sin²θ + cos²θ",
                answer: "sin²θ + cos²θ = 1",
                prove:
`Using the unit circle:

x² + y² = 1

x = cosθ
y = sinθ

Therefore:

sin²θ + cos²θ = 1

Proved ✓`
            }
        ],

        "Vectors": [
            {
                formula: "Vector Magnitude",
                answer: "|v| = √(x² + y²)",
                prove: "Using the Pythagorean theorem."
            }
        ]
    }
};


/* =========================
   SHOW TOPICS
========================= */

function showTopics(level) {

    const container =
        document.getElementById("topicList");

    container.innerHTML = "";

    const topics =
        Object.keys(mathematicsData[level])
        .sort((a, b) =>
            a.localeCompare(b)
        );

    topics.forEach(topic => {

        const link =
            document.createElement("a");

        link.href =
            "#";

        const button =
            document.createElement("button");

        button.className =
            "topic-button";

        button.textContent =
            topic;

        button.onclick =
            function(event) {

                event.preventDefault();

                showFormulas(
                    level,
                    topic
                );
            };

        link.appendChild(button);

        container.appendChild(link);
    });
}


/* =========================
   SHOW FORMULAS
========================= */

function showFormulas(level, topic) {

    const container =
        document.getElementById("topicList");

    container.innerHTML = "";

    const title =
        document.createElement("h2");

    title.textContent =
        topic;

    container.appendChild(title);

    const formulas =
        mathematicsData[level][topic];

    formulas.forEach((item, index) => {

        const button =
            document.createElement("button");

        button.className =
            "formula-button";

        button.textContent =
            item.formula;

        button.onclick =
            function() {

                showFormula(
                    level,
                    topic,
                    index
                );
            };

        container.appendChild(button);
    });

    const back =
        document.createElement("button");

    back.textContent =
        "← Back to Topics";

    back.onclick =
        function() {

            showTopics(level);
        };

    container.appendChild(back);
}


/* =========================
   SHOW FORMULA
========================= */

function showFormula(level, topic, index) {

    const container =
        document.getElementById("topicList");

    const item =
        mathematicsData[level][topic][index];

    container.innerHTML = "";

    const title =
        document.createElement("h2");

    title.textContent =
        item.formula;

    container.appendChild(title);


    const mainButton =
        document.createElement("button");

    mainButton.textContent =
        "Main Answer";

    const proveButton =
        document.createElement("button");

    proveButton.textContent =
        "Prove";


    const answerBox =
        document.createElement("div");

    answerBox.id =
        "formulaAnswer";

    answerBox.className =
        "formula-answer";


    mainButton.onclick =
        function() {

            answerBox.textContent =
                "Main Answer:\n\n" +
                item.answer;
        };


    proveButton.onclick =
        function() {

            answerBox.textContent =
                item.prove;
        };


    container.appendChild(mainButton);

    container.appendChild(proveButton);

    container.appendChild(answerBox);


    const back =
        document.createElement("button");

    back.textContent =
        "← Back to Formulas";

    back.onclick =
        function() {

            showFormulas(
                level,
                topic
            );
        };

    container.appendChild(back);
}
