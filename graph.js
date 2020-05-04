
// global variables
var N = 30;
var M = 30;
var G = [ ];

// constants
var sqrt2 = 1.4142;
var ds = [[0, -1, -1], [-1, 0, -1], [0, 1, -1], [1, 0, -1], [-1, -1, -sqrt2], [1, -1, -sqrt2], [-1, 1, -sqrt2] ,[1, 1, -sqrt2]]
//var ds = [[0, -1, -1], [-1, 0, -1], [0, 1, -1], [1, 0, -1]];
// var ds = [[1, 0, -1], [0, 1, -1], [-1, 0, -1], [0, -1, -1]];


function redraw(x, y, d, f) {
    //for(let [x, y, d] of players) {
        for(i=0; i < N; ++i) {
            dy = (y - i) * (y-i)

            for(j=0; j < M; ++j)  {
                dx = (x - j) * (x-j)
                if(dx + dy < d*d) {
                    f(i, j);
                }                
            }
        }
    //}
}

function valid(x, y) {
    return x < M && y < N && x >=0 && y >= 0;
}

function paint(py, px, pe, f) {    
    
    var visited = [];
    for(i=0; i < N; ++i) {
        r = [];
        for(j=0; j < M; ++j)  {
            r.push(false);
        }
        visited.push(r);
    }

    var q = [];
    
    q.push([px, py, pe]);

    while(q.length > 0) {
        // var u = qpop(pq);
        var u = q.pop();
        let [x, y, energy] = u;
        console.log(u, x, y, energy)

        visited[x][y] = energy;
        f(x, y);

        for (let [dx, dy, decay] of ds) {
            //console.log(dx, dy, decay);
            if(energy+decay > 0 && valid(x+dx, y+dy) && energy+decay > visited[x+dx][y+dy]) {                
                q.push([x+dx, y+dy, energy+decay]);
            }
        }
    }
}

