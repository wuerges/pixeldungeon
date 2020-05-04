
function bubble_down(q, i) {
    l = 2*i+1;
    r = 2*i+2;

    least = i;
    if(l < q.length && q[l][0] > q[i][0]) {
        least = l;
    }
    if(r < q.length && q[r][0] > q[i][0]) {
        least = r;
    }
    if(least != i) {
        qswap(q, i, least);
        bubble_down(q, least);
    }
}

function bubble_up(q, i) {
    if(i > 0) {
        var p = Math.floor((i-1) / 2);
        if(q[i][0] > q[p][0]) {
            qswap(q, i, p);
            bubble_up(q, p);
        }
    }
}

function qswap(q, x, y) {
    aux = q[x];
    q[x] = q[y];
    q[y] = aux;
}

function qpush(q, k, v) {
    q.push([k, v]);
    bubble_up(q, q.length -1);    
}

function qpop(q) {
    ret = q[0][1];

    q[0] = q[q.length-1];
    q.pop();

    bubble_down(q, 0);
    return ret;
}